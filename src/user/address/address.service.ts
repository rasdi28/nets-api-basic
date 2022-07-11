import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../address.entity';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private addressRepository:Repository<Address>
    ){}

    async findAll():Promise<any>{
        return await this.addressRepository.find();
    }

    async create(address:Address):Promise<Address>{
        return await this.addressRepository.save(address);
    }
}
