import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Muser } from "./user.entity";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @ApiProperty()
    street:string;

    @Column()
    @ApiProperty()
    city:string;

    @Column()
    @ApiProperty()
    country:string;


    @OneToOne(()=> Muser, (muser:Muser)=>muser.address)
    public muser:Muser;


}