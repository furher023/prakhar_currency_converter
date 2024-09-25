import { Module } from '@nestjs/common';
import { CurrencyConverterService } from './currency-converter.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule
  ],
  providers: [CurrencyConverterService, ConfigService]
})
export class CurrencyConverterModule {}
