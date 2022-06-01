import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Muser } from "./user.entity";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    content;

    @Column({nullable:true})
    category:string;

  

}