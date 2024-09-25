import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BillModule } from './bill/bill.module';
import { CurrencyConverterModule } from './currency-converter/currency-converter.module';

@Module({
  imports: [BillModule, CurrencyConverterModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
