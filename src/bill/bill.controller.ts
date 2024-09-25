import { Body, Controller, Post } from '@nestjs/common';
import { BillService } from './bill.service';
import { CalculateBillResponse } from './interfaces/calulate-bill-response.interface';
import { CalculateBillRequestDto } from './dto/calculate-billl-request-body.dto';

@Controller('api')
export class BillController {
    constructor(private billService: BillService){}

    @Post('calculate')
    async calculateBill(@Body() billDetails: CalculateBillRequestDto): Promise<CalculateBillResponse>{
        return this.billService.calculate(billDetails);
    }
}
