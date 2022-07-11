import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Mactivity{

    @PrimaryGeneratedColumn()
    id :number;

    @Column()
    @ApiProperty()
    activitytitle : string;

    @Column()
    @ApiProperty()
    activitydetail : string;

    @Column()
    ticketid : string;

}