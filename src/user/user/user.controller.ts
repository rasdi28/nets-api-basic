import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Muser } from '../user.entity';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private muserService:UserService){}

    @Get()
    index():Promise<Muser[]>{
        return this.muserService.findAll();
    }
}
