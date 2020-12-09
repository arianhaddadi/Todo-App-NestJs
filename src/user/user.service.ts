import { Injectable } from '@nestjs/common';
import UserEntity from '../db/entity/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/entity/book.entity';
import {getConnection} from "typeorm";

@Injectable()
export class UserServices {

    async insert(userDetails: CreateUserDto): Promise<UserEntity> {
        const userEntity: UserEntity = UserEntity.create();
        const {name } = userDetails;
        userEntity.name = name;
        await UserEntity.save(userEntity);
        return userEntity;
    }
    async getAllUsers(): Promise<UserEntity[]> {
        return await UserEntity.find();
    }
    async getBooksOfUser(userID: number): Promise<BookEntity[]> {
        const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
        return user.books;
    }
    async findByUsername(username: string): Promise<UserEntity> {
        const user: UserEntity = await UserEntity.findOne({where: {username: username}});
        return user;
    }
}