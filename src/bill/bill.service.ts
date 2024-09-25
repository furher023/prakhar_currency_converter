import { Injectable } from '@nestjs/common';
import { CalculateBillResponse } from './interfaces/calulate-bill-response.interface';
import { UserTypes } from '../shared/enums/user-types.enum';
import { CurrencyCodes } from '../shared/enums/currency-codes.enums';
import { BillItems } from './interfaces/bill-items.interface';
import { BillItemsCategory } from '../shared/enums/bill-items-category.enums';
import { CurrencyConverterService } from '../currency-converter/currency-converter.service';
import { CalculateBillRequestDto } from './dto/calculate-billl-request-body.dto';

@Injectable()
export class BillService {

    constructor(private readonly currencyConverterService: CurrencyConverterService){}

    // calculates the bill and performs conversion of currency
    public async calculate(billDetails: CalculateBillRequestDto): Promise<CalculateBillResponse>{
        // getting the % discount depending on the user
        const discountPercent: number = this.getPercentDiscount(billDetails.userType, billDetails.tenure);
        // getting the % discount amount
        const percentDiscountAmount: number = this.calculatePercentDiscountAmount(billDetails.billItems, this.getPercentDiscountExcludedCategries(), discountPercent); 
        // getting the fixed discount
        const fixedDiscountAmount: number = await this.getFixedDiscount(billDetails.totalBillAmount, billDetails.originalCurrency);
         // calculate total bill after the discounts
        let totalBillAmount: number = billDetails.totalBillAmount - percentDiscountAmount
        totalBillAmount -= fixedDiscountAmount;
        // convert the total bill amount to target currency
        totalBillAmount = await this.currencyConverterService.convertAmount({
            amount: totalBillAmount,
            base: billDetails.originalCurrency,
            target: billDetails.targetCurrency,
        });
        return {
            totalBillAmount,
            currencyCode: billDetails.targetCurrency
        }
    }

    // gets the % discount depending on the user type and user tenure
    private getPercentDiscount(userType: UserTypes, tenure: number): number{
        switch (userType) {
            case UserTypes.EMPLOYEE:
              return 30;
            case UserTypes.AFFILIATE:
              return 20;
            case UserTypes.CUSTOMER:
              if (tenure > 2) return 5;
              else return 0;
        }
    }

    // get fixed discount depending on the bill amount
    private async getFixedDiscount(amount: number, base: CurrencyCodes): Promise<number>{
        // fixed discount is $5 per $100
        const multipleAmount = 100, discount = 5;
        const usdAmount: number = await this.currencyConverterService.convertAmount({
          amount,
          base,
          target: CurrencyCodes.USD,
        });
        const discountAmount = Math.floor(usdAmount / multipleAmount) * discount;
        const targetDiscount: number = await this.currencyConverterService.convertAmount({
            amount: discountAmount,
            base: CurrencyCodes.USD,
            target: base,
        });
        return targetDiscount;
    }

    // calculates the % discount amount depending upon the categories in bill items
    private calculatePercentDiscountAmount(items: Array<BillItems>, excludedCategories: Array<BillItemsCategory>, discountPercent: number): number{
        let totalDiscount = 0;
        for (const item of items) {
          if (!excludedCategories.includes(item.category)) {
            totalDiscount += (item.totalPrice * discountPercent) / 100;
          }
        }
        return totalDiscount;
    }

    private getPercentDiscountExcludedCategries(): Array<BillItemsCategory> {
        return [BillItemsCategory.GROCERIES];
    }
}
