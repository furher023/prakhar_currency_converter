import { Test, TestingModule } from '@nestjs/testing';
import { BillService } from './bill.service';
import { HttpModule } from '@nestjs/axios';
import { CurrencyConverterService } from '../currency-converter/currency-converter.service';
import { ConfigService } from '@nestjs/config';

describe('BillService', () => {
  let service: BillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [BillService, CurrencyConverterService, ConfigService],
    }).compile();

    service = module.get<BillService>(BillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
