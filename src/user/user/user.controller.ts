import { Controller, Get, HttpStatus, Req, Res, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { request, response } from 'express';
import { Muser } from '../user.entity';
import { UserService } from './user.service';
import { Response } from 'express';



@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private muserService:UserService){}

    @Get()
    async index(@Res() res:Response):Promise<any>{
        const data = await this.muserService.findAll();
            res.status(HttpStatus.OK).json({
                code:200,
                message:"success",
                data:data
            });
        
    }




}
