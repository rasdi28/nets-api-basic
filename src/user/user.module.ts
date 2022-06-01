import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { Post } from './post.entity';
import { Muser } from './user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AddressService } from './address/address.service';
import { AddressController } from './address/address.controller';
@Module({
  imports:[TypeOrmModule.forFeature([Muser,Address,Post])],
  controllers: [UserController, AddressController],
  providers: [UserService, AddressService]
})
export class UserModule {}
