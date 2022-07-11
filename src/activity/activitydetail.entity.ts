import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity();
export class TactvityDetail {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    ticketid:string;

    @Column('date')
    activityopen:Date;

    @Column('date')
    activityclose:Date;

}