import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { Repository } from 'typeorm';
import { Mactivity } from '../activity.entity';
import { TactvityDetail } from '../activitydetail.entity';

@Injectable()
export class ActivityService {

    constructor(
        @InjectRepository(Mactivity)
        private mactivityRepository:Repository<Mactivity>
    ){}


    async findAll():Promise<Mactivity[]>{
        return await this.mactivityRepository.find();
    }

    async create(objactivity:Mactivity):Promise<any>{
       const random= Math.floor(1000000+Math.random() * 9000000);    
       objactivity.ticketid = random.toString();
       
       console.log(objactivity.ticketid);
       const ticket:string = objactivity.ticketid;
       console.log(ticket);
       return await this.mactivityRepository.save(objactivity);
    }



}
