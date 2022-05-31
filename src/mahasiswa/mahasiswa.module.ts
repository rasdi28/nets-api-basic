import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mmahasiswa } from './mahasiswa.entity';
import { MahasiswaController } from './mahasiswa/mahasiswa.controller';
import { MahasiswaService } from './mahasiswa/mahasiswa.service';

@Module({
  imports:[TypeOrmModule.forFeature([Mmahasiswa])],
  controllers: [MahasiswaController],
  providers: [ MahasiswaService]
})
export class MahasiswaModule {}
