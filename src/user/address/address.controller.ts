import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { AddressService } from './address.service';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Address } from '../address.entity';

@ApiTags('address')
@Controller('address')
export class AddressController {
    constructor(private addressService:AddressService){}

    @Get('getall')
    async index(@Res() res:Response):Promise<any>{

        try{
            const data = await this.addressService.findAll();
            if(data !=null){
                res.status(HttpStatus.OK).json({
                    code:200,
                    message:'success',
                    data : data
                });
            }
        }catch(err) {
            console.log(err);
        }       
    }

    @Post()
    async create(@Body() objdata:Address):Promise<Address>{
        return this.addressService.create(objdata);
    }

    @Get('/findbyid/:id')
    testfindid(@Param('id') id:string): string{
        console.log(id);
        console.log(Math.floor(100000+Math.random()*900000));
        if(id=='5'){
            return `this is ganjil`;
        }else {
            return 'genap';
        }
    }
}

