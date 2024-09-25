import { IsEnum, IsNumber } from 'class-validator';
import { CurrencyCodes } from '../../shared/enums/currency-codes.enums';

export class CalculateBillResponseDto {
    @IsNumber()
    totalBillAmount: number;

    @IsEnum(CurrencyCodes)
    currencyCode: CurrencyCodes;
}