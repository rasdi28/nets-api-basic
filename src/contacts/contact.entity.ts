import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiProperty()
    firstname: string;

    @Column()
    @ApiProperty()
    lastname: string;

    @Column()
    @ApiProperty()
    email: string;

    @Column()
    @ApiProperty()
    phone: string;

    @Column()
    @ApiProperty()
    city: string;

    @Column()
    @ApiProperty()
    country: string;
}