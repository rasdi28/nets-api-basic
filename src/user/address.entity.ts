import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Muser } from "./user.entity";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    street:string;

    @Column()
    city:string;

    @Column()
    country:string;


    @OneToOne(()=> Muser, (muser:Muser)=>muser.address)
    public muser:Muser;


}