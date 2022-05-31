import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiParam, ApiTags } from '@nestjs/swagger';
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
