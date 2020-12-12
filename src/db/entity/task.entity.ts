import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export default class TaskEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;

    @Column({length: 500})
    password: string;

    
}