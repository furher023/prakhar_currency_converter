import { Module } from '@nestjs/common';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { CurrencyConverterService } from 'src/currency-converter/currency-converter.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [BillController],
  providers: [BillService, CurrencyConverterService, ConfigService]
})
export class BillModule {}
