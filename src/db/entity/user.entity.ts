import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export default class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    username: string;

    @Column({length: 500})
    password: string;

    @Column({ length: 500 })
    name: string;

}