import { Test, TestingModule } from '@nestjs/testing';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { HttpModule } from '@nestjs/axios';
import { CurrencyConverterService } from '../currency-converter/currency-converter.service';
import { ConfigService } from '@nestjs/config';

describe('BillController', () => {
  let controller: BillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [BillController],
      providers: [BillService, CurrencyConverterService, ConfigService]
    }).compile();

    controller = module.get<BillController>(BillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
