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

    async findAll():Promise<Mmahasiswa[]> {
        return await this.mahasiswaRepository.find();
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
