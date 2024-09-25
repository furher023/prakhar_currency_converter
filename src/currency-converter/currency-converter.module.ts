import { Module } from '@nestjs/common';
import { CurrencyConverterService } from './currency-converter.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [CurrencyConverterService, ConfigService]
})
export class CurrencyConverterModule {}
