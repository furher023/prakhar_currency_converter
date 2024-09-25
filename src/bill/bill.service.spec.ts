import { Test, TestingModule } from '@nestjs/testing';
import { BillService } from './bill.service';
import { HttpModule } from '@nestjs/axios';
import { CurrencyConverterService } from '../currency-converter/currency-converter.service';
import { ConfigService } from '@nestjs/config';
import { CurrencyCodes } from '../shared/enums/currency-codes.enums';
import { BillItemsCategory } from '../shared/enums/bill-items-category.enums';
import { BillItemDto, CalculateBillRequestDto } from './dto/calculate-billl-request-body.dto';
import { UserTypes } from '../shared/enums/user-types.enum';

describe('BillService', () => {
  let service: BillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [BillService, CurrencyConverterService, ConfigService],
    }).compile();

    service = module.get<BillService>(BillService);
  });
  
  jest.mock('../currency-converter/currency-converter.service'); // Mock the CurrencyConverterService

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate bill correctly for customer, tenure > 2', async () => {
    const billItems: Array<BillItemDto> = [
      {
          name: "Rice",
          category: BillItemsCategory.GROCERIES,
          totalPrice: 50
      },
      {
          name: "book",
          category: BillItemsCategory.BOOKS,
          totalPrice: 50
      }
  ]
    const billData: CalculateBillRequestDto = {
      userType: UserTypes.CUSTOMER,
      tenure: 3,
      billItems,
      originalCurrency: CurrencyCodes.USD,
      targetCurrency: CurrencyCodes.USD,
      totalBillAmount: 100
    };
    const result = await service.calculate(billData);
    expect(result).toEqual({
      totalBillAmount: 92.5,
      currencyCode: CurrencyCodes.USD
    });
  });

  it('should calculate bill correctly for customer, tenure < 2', async () => {
    const billItems: Array<BillItemDto> = [
      {
          name: "Rice",
          category: BillItemsCategory.GROCERIES,
          totalPrice: 50
      },
      {
          name: "book",
          category: BillItemsCategory.BOOKS,
          totalPrice: 50
      }
  ]
    const billData: CalculateBillRequestDto = {
      userType: UserTypes.CUSTOMER,
      tenure: 1,
      billItems,
      originalCurrency: CurrencyCodes.USD,
      targetCurrency: CurrencyCodes.USD,
      totalBillAmount: 100
    };
    const result = await service.calculate(billData);
    expect(result).toEqual({
      totalBillAmount: 95,
      currencyCode: CurrencyCodes.USD
    });
  });

  it('should calculate bill correctly for employee', async () => {
    const billItems: Array<BillItemDto> = [
      {
          name: "Rice",
          category: BillItemsCategory.GROCERIES,
          totalPrice: 50
      },
      {
          name: "book",
          category: BillItemsCategory.BOOKS,
          totalPrice: 50
      }
  ]
    const billData: CalculateBillRequestDto = {
      userType: UserTypes.EMPLOYEE,
      tenure: 3,
      billItems,
      originalCurrency: CurrencyCodes.USD,
      targetCurrency: CurrencyCodes.USD,
      totalBillAmount: 100
    };
    const result = await service.calculate(billData);
    expect(result).toEqual({
      totalBillAmount: 80,
      currencyCode: CurrencyCodes.USD
    });
  });

  it('should calculate bill correctly for affiliate', async () => {
    const billItems: Array<BillItemDto> = [
      {
          name: "Rice",
          category: BillItemsCategory.GROCERIES,
          totalPrice: 50
      },
      {
          name: "book",
          category: BillItemsCategory.BOOKS,
          totalPrice: 50
      }
  ]
    const billData: CalculateBillRequestDto = {
      userType: UserTypes.AFFILIATE,
      tenure: 3,
      billItems,
      originalCurrency: CurrencyCodes.USD,
      targetCurrency: CurrencyCodes.USD,
      totalBillAmount: 100
    };
    const result = await service.calculate(billData);
    expect(result).toEqual({
      totalBillAmount: 85,
      currencyCode: CurrencyCodes.USD
    });
  });

});
