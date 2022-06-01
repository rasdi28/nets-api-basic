import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
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
    async create(@Body() objdata:Address):Promise<any>{
        return this.addressService.create(objdata);
    }
}
