import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Muser } from './user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports:[TypeOrmModule.forFeature([Muser])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
