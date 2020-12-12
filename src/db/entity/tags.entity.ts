import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class TagEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;

    @ManyToOne(type => TaskEntity, taskEntity => taskEntity.items)
    task: TaskEntity;


}