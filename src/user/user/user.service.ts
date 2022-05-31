import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Muser } from '../user.entity';

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(Muser)
        private userRepository:Repository<Muser>
    ){}

   async findAll():Promise<Muser[]>{
        return await this.userRepository.find();
   }



}
