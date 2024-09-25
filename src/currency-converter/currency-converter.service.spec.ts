import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyConverterService } from './currency-converter.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { CurrencyCodes } from '../shared/enums/currency-codes.enums';

describe('CurrencyConverterService', () => {
  let service: CurrencyConverterService;
  let mockAxios: MockAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule
      ],
      providers: [CurrencyConverterService, ConfigService],
    }).compile();

    service = module.get<CurrencyConverterService>(CurrencyConverterService);
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert currency correctly', async () => {
    const amount = 100;
    const fromCurrency = CurrencyCodes.USD;
    const toCurrency = CurrencyCodes.EUR;
    const exchangeRate = 0.85;

    jest.spyOn(service, 'getConversionRate').mockImplementation(async() => exchangeRate);
    const result = await service.convertAmount({ amount: amount, base: fromCurrency, target: toCurrency });
    expect(result).toBe((amount * exchangeRate));
  });

  it('should give conversion rate correctly', async () => {
    const fromCurrency = CurrencyCodes.USD;
    const toCurrency = CurrencyCodes.USD;
    const exchangeRate = 1;

    const result = await service.getConversionRate({ base: fromCurrency, target: toCurrency, apiKey:'12345678' });
    expect(result).toBe((exchangeRate));
  });

  it('should give conversion rate correctly', async () => {
    const fromCurrency = CurrencyCodes.USD;
    const toCurrency = CurrencyCodes.EUR;
    const exchangeRate = 0.85;
    mockAxios.onGet(`https://v6.exchangerate-api.com/v6/12345678/latest/${fromCurrency}`).reply(200, {
      conversion_rates: {
        [toCurrency]: exchangeRate,
      },
    });
    const result = await service.getConversionRate({ base: fromCurrency, target: toCurrency, apiKey: '12345678' });
    console.log(result);
    expect(result).toBe((exchangeRate));
  });
  
});
