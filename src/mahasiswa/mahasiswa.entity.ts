import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Mmahasiswa {
    @PrimaryGeneratedColumn()
    mmahasiswapk:number;

    @Column()
    @ApiProperty()
    name:string;

    @Column()
    @ApiProperty()
    npm:string;

    @Column()
    @ApiProperty()
    address:string;

    @Column('date')
    @ApiProperty()
    created_at:Date;

    @Column('date')
    @ApiProperty()
    last_updated:Date;

    @Column()
    @ApiProperty()
    created_by:string;

    @Column()
    @ApiProperty()
    updated_by:string;

}