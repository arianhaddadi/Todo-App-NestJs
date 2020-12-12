import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import CategoryEntity from './category.entity';
import ItemEntity from './item.entity';
import TagEntity from './tag.entity';

@Entity()
export default class TaskEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;

    @OneToOne(type => CategoryEntity)
    @JoinColumn()
    category: CategoryEntity;
    
    @OneToMany(type => ItemEntity, itemEntity => itemEntity.task)
    items: ItemEntity[];

    @OneToMany(type => TagEntity, tagEntity => tagEntity.task)
    tags: TagEntity[];
}