import { Injectable } from '@nestjs/common';

@Injectable()
export class BillService {

    // calculates the bill and performs conversion of currency
    public async calculate(){

    }

    // gets the % discount depending on the user type and user tenure
    private getPercentDiscount(){

    }

    // get fixed discount depending on the bill amount
    private getFixedDiscount(){

    }

    // calculates the % discount amount depending upon the categories in bill items
    private calculatePercentDiscountAmount(){

    }
}
