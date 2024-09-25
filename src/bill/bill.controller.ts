import { Controller, Post } from '@nestjs/common';
import { BillService } from './bill.service';

@Controller('api')
export class BillController {
    constructor(private billService: BillService){}

    @Post('calculate')
    async calculateBill(){
        return this.billService.calculate();
    }
}
