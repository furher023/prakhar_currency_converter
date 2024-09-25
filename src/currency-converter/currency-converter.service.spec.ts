import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyConverterService } from './currency-converter.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

describe('CurrencyConverterService', () => {
  let service: CurrencyConverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule
      ],
      providers: [CurrencyConverterService, ConfigService],
    }).compile();

    service = module.get<CurrencyConverterService>(CurrencyConverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
