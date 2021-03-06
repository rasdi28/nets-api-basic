import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './Employee/employee.entity';
import { EmployeeModule } from './Employee/employee.module';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/contact.entity';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { Mmahasiswa } from './mahasiswa/mahasiswa.entity';
import { UserModule } from './user/user.module';
import { Muser } from './user/user.entity';
import { Address } from './user/address.entity';
import { ActivityModule } from './activity/activity.module';
import { Mactivity } from './activity/activity.entity';
import { TactvityDetail } from './activity/activitydetail.entity';
import { MdosenModule } from './mdosen/mdosen.module';
import { Mdosen } from './mdosen/mdosen.entity';



@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'postgress',
      database: 'basic_nest',
      entities:[Employee, Contact,Mmahasiswa,Muser,Address,Mactivity,TactvityDetail,Mdosen],
      migrations:['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun:true
    }), 
    EmployeeModule, ContactsModule, MahasiswaModule, UserModule, ActivityModule, MdosenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
