import { Injectable } from '@nestjs/common';
import { CurrencyCodes } from '../shared/enums/currency-codes.enums';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class CurrencyConverterService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService 
    ) {}
    // converts the amount from a base to a target currency
    public async convertAmount({ amount, base, target }: { amount: number, base: CurrencyCodes, target: CurrencyCodes }): Promise<number>{
        const conversionRate = await this.getConversionRate({ base, target, apiKey: this.configService.get('EXCHANGE_RATE_API_KEY') });
        return amount*conversionRate;
    }

    // gets the conversion rate from the API or cache
    public async getConversionRate({ base, target, apiKey }: { base: CurrencyCodes, target: CurrencyCodes, apiKey: string}): Promise<number>{
        if(base == target){
            return 1;
        }
        else{
            // call the exchange rate API
            const response = await lastValueFrom(this.httpService.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`));
            const conversionRate: number = response.data.conversion_rates[target];
            return conversionRate;
        }
    }
}
