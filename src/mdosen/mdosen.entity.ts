import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mdosen {
    @PrimaryGeneratedColumn()
    mdosenpk:number;

    @Column()
    @ApiProperty()
    name:string;

    @Column()
    @ApiProperty()
    nip:string;


}