import { IsEnum, IsNumber, IsOptional, IsArray, ValidateNested, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { CurrencyCodes } from '../../shared/enums/currency-codes.enums';
import { UserTypes } from '../../shared/enums/user-types.enum';
import { BillItemsCategory } from '../../shared/enums/bill-items-category.enums';

export class BillItemDto {
    @IsString()
    name: string;

    @IsEnum(BillItemsCategory)
    category: BillItemsCategory;

    @IsNumber()
    totalPrice: number;
}

export class CalculateBillRequestDto {
    @IsEnum(UserTypes)
    userType: UserTypes;

    @IsOptional()
    @IsNumber()
    tenure?: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => BillItemDto)
    billItems: Array<BillItemDto>;

    @IsEnum(CurrencyCodes)
    originalCurrency: CurrencyCodes;

    @IsEnum(CurrencyCodes)
    targetCurrency: CurrencyCodes;

    @IsNumber()
    totalBillAmount: number;
}