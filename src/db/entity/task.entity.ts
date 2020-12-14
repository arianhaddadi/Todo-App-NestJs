import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import CategoryEntity from './category.entity';
import ItemEntity from './item.entity';
import TagEntity from './tag.entity';

@Entity()
export default class TaskEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;

    @Column({length: 500, nullable: true})
    text: string

    @ManyToOne(type => CategoryEntity)
    category: CategoryEntity;
    
    @OneToMany(type => ItemEntity, itemEntity => itemEntity.task)
    items: ItemEntity[];

    @ManyToMany(type => TagEntity, tagEntity => tagEntity.tasks)
    @JoinTable()
    tags: TagEntity[];
}