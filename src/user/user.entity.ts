import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address.entity";
import { Post } from "./post.entity";


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


   @OneToOne(()=>Address)
    @JoinColumn({name:"addressid"})
    address:Address;



}