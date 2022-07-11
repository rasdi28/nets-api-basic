import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MdosenController } from './mdosen.controller';
import { Mdosen } from './mdosen.entity';
import { MdosenService } from './mdosen.service';

@Module({
  imports:[TypeOrmModule.forFeature([Mdosen])],
  controllers: [MdosenController],
  providers: [MdosenService]
})
export class MdosenModule {}
