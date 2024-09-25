import { Injectable } from '@nestjs/common';
import { CalculateBillResponse } from './interfaces/calulate-bill-response.interface';
import { UserTypes } from '../shared/enums/user-types.enum';
import { CurrencyCodes } from '../shared/enums/currency-codes.enums';
import { BillItems } from './interfaces/bill-items.interface';
import { CalculateBillRequestbody } from './interfaces/calculate-bill-request-body.interface';
import { BillItemsCategory } from '../shared/enums/bill-items-category.enums';


@Injectable()
export class BillService {

    constructor(){
        const excludedCategories: Array<BillItemsCategory> = this.getPercentDiscountExcludedCategries();
    }

    // calculates the bill and performs conversion of currency
    public async calculate(billDetails: CalculateBillRequestbody): Promise<CalculateBillResponse>{

        return {
            totalBillAmount: 0
        }
    }

    // gets the % discount depending on the user type and user tenure
    private getPercentDiscount(userType: UserTypes, tenure: number): number{
        return 0;
    }

    // get fixed discount depending on the bill amount
    private getFixedDiscount(amount: number, base: CurrencyCodes): number{
        return 0;
    }

    // calculates the % discount amount depending upon the categories in bill items
    private calculatePercentDiscountAmount(items: Array<BillItems>, excludedCategories: Array<BillItemsCategory>, discountPercent: number): number{
        return 0;
    }

    private getPercentDiscountExcludedCategries(): Array<BillItemsCategory> {
        return [BillItemsCategory.GROCERIES];
    }
}
