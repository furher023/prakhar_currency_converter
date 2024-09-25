import { Body, Controller, Post } from '@nestjs/common';
import { BillService } from './bill.service';
import { CalculateBillRequestDto } from './dto/calculate-billl-request-body.dto';
import { CalculateBillResponseDto } from './dto/calculate-bill-response.dto';

@Controller('api')
export class BillController {
    constructor(private billService: BillService){}

    @Post('calculate')
    async calculateBill(@Body() billDetails: CalculateBillRequestDto): Promise<CalculateBillResponseDto>{
        return this.billService.calculate(billDetails);
    }
}
