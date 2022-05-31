import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address.entity";


@Entity()
export class Muser{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    email:string;

    @Column()
    name:string;

    @Column()
    password :string;

    @OneToOne(()=>Address, {
        eager:true,
        cascade:true
    })
    @JoinColumn()
    public address:Address;
    




}