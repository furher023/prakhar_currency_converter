import { Body, Controller, Post } from '@nestjs/common';
import { BillService } from './bill.service';
import { CalculateBillRequestbody } from './interfaces/calculate-bill-request-body.interface';
import { CalculateBillResponse } from './interfaces/calulate-bill-response.interface';

@Controller('api')
export class BillController {
    constructor(private billService: BillService){}

    @Post('calculate')
    async calculateBill(@Body() billDetails: CalculateBillRequestbody): Promise<CalculateBillResponse>{
        return this.billService.calculate(billDetails);
    }
}
