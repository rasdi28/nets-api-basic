import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { identity } from 'rxjs';
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

    // @Get()
    // @ApiResponse({status:200, description:'return a list mahasisaw'})
    // async fetchAll(@Res() respon)
    
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


}
