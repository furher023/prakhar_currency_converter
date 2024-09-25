import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BillModule } from './bill/bill.module';
import { CurrencyConverterModule } from './currency-converter/currency-converter.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    BillModule, 
    CurrencyConverterModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
