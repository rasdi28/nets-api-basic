import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mdosen } from './mdosen.entity';

@Injectable()
export class MdosenService {
    constructor(@InjectRepository(Mdosen) private mdosenRepo:Repository<Mdosen> ){}

    findAll():Promise<Mdosen[]> {
        return this.mdosenRepo.find();
    }

    async create(dosen:Mdosen):Promise<Mdosen>{
        return await this.mdosenRepo.save(dosen);
    }

    
}
