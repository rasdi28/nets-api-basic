import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { Contact } from "./contact.entity";

@Entity()

export class Resp{
    @Column()
    @ApiProperty()
    code:number;

    @Column()
    @ApiProperty()
    message:string;
   
    @Column()
    @ApiProperty()
    data:Object;
}