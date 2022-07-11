import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Mmahasiswa } from '../mahasiswa.entity';

@Injectable()
export class MahasiswaService {

    constructor(
        @InjectRepository(Mmahasiswa)
        private mahasiswaRepository:Repository<Mmahasiswa>,
    ){}

   mahasiswa = [
        {
            id:1,
            name:'rasdi',
            npm : '15120',
            fakultas:'FASILKOM'
        },
        {
            id:2,
            name:'bayu',
            npm :'15121',
            fakultas :'FAI'
        },
        {
            id:3,
            name:'rohman',
            npm :'15121',
            fakultas :'FAI'
        }
    ]


    getdatamahasiswa(){
        return this.mahasiswa;
    }

    getmahasiswabyid(id:number){
        return this.mahasiswa.find((mahasiswa)=>
        mahasiswa.id===id);

    }


    //database    

    async findAll():Promise<Mmahasiswa[]> {
        return await this.mahasiswaRepository.find();
    }

    async findByid(id:number):Promise<Mmahasiswa[]>{
        return await this.mahasiswaRepository.find({
            where:{
                mmahasiswapk:id
            }
        });
    }

    async create(mahasiswa:Mmahasiswa):Promise<Mmahasiswa> {
        return await this.mahasiswaRepository.save(mahasiswa);
    }

    async update(mahasiswa:Mmahasiswa):Promise<UpdateResult> {
        return await this.mahasiswaRepository.update(mahasiswa.mmahasiswapk,mahasiswa);
    }

    async delete(id):Promise<DeleteResult> {
        return await this.mahasiswaRepository.delete(id);
    }
}
