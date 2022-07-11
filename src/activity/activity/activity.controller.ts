import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Mactivity } from '../activity.entity';
import { TactvityDetail } from '../activitydetail.entity';
import { ActivityService } from './activity.service';

@ApiTags('mactivity')
@Controller('activity')
export class ActivityController {
    constructor(private mactivityService:ActivityService){}


    @Get()
    async index(@Res() res:Response):Promise<any>{
       try {
        const data =await this.mactivityService.findAll();
        if(data !=null){
            res.status(HttpStatus.OK).json({
                code:200,
                message:'success',
                data:data
            });

            
        }
       } catch (error) {
           console.log(error);
       }
    }

    @Post()
    async create(@Body() objdata:Mactivity):Promise<any>{
        return this.mactivityService.create(objdata);
    }


}
