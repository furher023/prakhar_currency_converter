import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BillModule } from './bill/bill.module';
import { CurrencyConverterModule } from './currency-converter/currency-converter.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available globally
    }),
    LoggerModule.forRoot(),
    BillModule, 
    CurrencyConverterModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
