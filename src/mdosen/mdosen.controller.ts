import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Mdosen } from './mdosen.entity';
import { MdosenService } from './mdosen.service';

@ApiTags('mdosen')
@Controller('mdosen')
export class MdosenController {

    constructor(private readonly mdosenService:MdosenService){}

    @Get('all')
    async getAll():Promise<Mdosen[]> {
        return await this.mdosenService.findAll();
    }

   @Post('/add/')
   @ApiResponse({
       status:201,
       description:'success'
   })
   async create(@Body() Dosendata:Mdosen):Promise<any> {
       return this.mdosenService.create(Dosendata);
   }


}
