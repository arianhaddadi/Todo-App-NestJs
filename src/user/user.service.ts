import { Injectable } from '@nestjs/common';
import UserEntity from '../db/entity/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/entity/book.entity';
import {hashSync} from 'bcrypt';

@Injectable()
export class UserServices {

    createPasswordHash(plainTextPassword: string): string {
        const saltRounds = 10;
        const hashedPassword = hashSync(plainTextPassword, saltRounds);
        return hashedPassword;
    }

    async insert(userDetails: CreateUserDto): Promise<UserEntity> {
        const userEntity: UserEntity = UserEntity.create();
        const {name, username, password} = userDetails;
        userEntity.name = name;
        userEntity.username = username;
        userEntity.password = this.createPasswordHash(password);
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