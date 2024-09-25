import { Injectable } from '@nestjs/common';
import { CurrencyCodes } from '../shared/enums/currency-codes.enums';

@Injectable()
export class CurrencyConverterService {

    // converts the amount from a base to a target currency
    public async convertAmount({ amount, base, target }: { amount: number, base: CurrencyCodes, target: CurrencyCodes }): Promise<number>{
        const conversionRate = await this.getConversionRate({ base, target, apiKey: "get from config"});
        return amount*conversionRate;
    }

    // gets the conversion rate from the API or cache
    public async getConversionRate({ base, target, apiKey }: { base: CurrencyCodes, target: CurrencyCodes, apiKey: string}): Promise<number>{
        if(base == target){
            return 1;
        }
        else{
            // call the exchange rate API
        }
    }
}
