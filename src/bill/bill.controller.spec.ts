import { Test, TestingModule } from '@nestjs/testing';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { HttpModule } from '@nestjs/axios';
import { CurrencyConverterService } from '../currency-converter/currency-converter.service';
import { ConfigService } from '@nestjs/config';
import { CalculateBillRequestDto } from './dto/calculate-billl-request-body.dto';
import { CalculateBillResponseDto } from './dto/calculate-bill-response.dto';
import { ApiKeyGuard } from '../auth/api-key.guard';

describe('BillController', () => {
  
  let controller: BillController;
  let service: BillService;
  const billMockup = {} as CalculateBillRequestDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [BillController],
      providers: [BillService, CurrencyConverterService, ConfigService]
    })
    .overrideGuard(ApiKeyGuard)
    .useValue({ canActivate: () => true })
    .compile();

    controller = module.get<BillController>(BillController);
    service = module.get<BillService>(BillService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get total bill amount', async () => {
    const result = {} as CalculateBillResponseDto;
    jest.spyOn(service, 'calculate').mockImplementation(async () => result);
    expect(await controller.calculateBill(billMockup)).toBe(result);
  });
});
