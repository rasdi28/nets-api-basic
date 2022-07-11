import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Req, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { Response} from 'express';
import { get } from 'http';
import { identity } from 'rxjs';
import { json } from 'stream/consumers';
import { Mmahasiswa } from '../mahasiswa.entity';
import { MahasiswaService } from './mahasiswa.service';

@ApiTags('mahasiswa')
@Controller('mahasiswa')
export class MahasiswaController {

    constructor(private mahasiswaService:MahasiswaService){}

    @Get()
    index():Promise<Mmahasiswa[]> {
        return this.mahasiswaService.findAll();
    }

    @Get('getall')
    async test(){
        const dta1 = this.mahasiswaService.findAll();
        return dta1;
    }

  
    
    @Post()
    async create(@Body() objmahasiswa:Mmahasiswa):Promise<any>{
        return this.mahasiswaService.create(objmahasiswa);
    }

    @Put('/update/:id')
    @ApiParam({name:'id'})
    async update(@Param('id') mmahasiswapk, @Body() objMahasiswa: Mmahasiswa ): Promise<any>{
        objMahasiswa.mmahasiswapk = Number(mmahasiswapk);
        return this.mahasiswaService.update(objMahasiswa);
    }


    @Delete('/delete/:id')
    @ApiParam({name:'id'})
    @ApiCreatedResponse({status:201, description:'success'})
    async delete(@Param('id') mmahasiswapk): Promise<any>{
        return this.mahasiswaService.delete(mmahasiswapk);
    }

    @Get('datamahasiswa')
    getdatamahasiswa(@Res() res:Response){
        const data= this.mahasiswaService.getdatamahasiswa();
        if(data){
            res.status(HttpStatus.OK).json({
                code:200,
                message:'success',
                data:data
            })
        }
    }

    @Get('byid/:id')
    getdatamahasiswabyid(
        @Param('id',ParseIntPipe) id:number,
        @Req() req:Request,
        @Res() res:Response,
    ){
        const mahasiswa = this.mahasiswaService.getmahasiswabyid(id);
        if(mahasiswa) {
            res.send(mahasiswa);
        }else {
            res.status(400).send({message:'Mahasiswa not found'});
        }
    }

    @Get('findby/:id')
    async getdatabyid(
        @Param('id', ParseIntPipe) id:number,
        @Req() req:Request,
        @Res() res:Response
    ){
        return this.mahasiswaService.findByid(id);
    }




}
