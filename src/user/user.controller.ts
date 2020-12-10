import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger'; 
import { UserServices } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import { Public } from 'src/public-decorator';

@Controller('users')
export class UserController {
    constructor(private readonly usersServices: UserServices) {}

    @ApiResponse({ status: 200, description: "This will handle the creation of new Users" }) 
    @Public()
    @Post('post')
    postUser( @Body() user: CreateUserDto) {
        return this.usersServices.insert(user);
    }

    @ApiResponse({ status: 200, description: "This returns the list of all the existing users in the database" }) 
    @Get()
    getAll() {
        return this.usersServices.getAllUsers();
    }

    @ApiResponse({ status: 200, description: "This return all the books which are associated with the user provided through 'userID' by the request" })   
    @Get('books')
    getBooks( @Body('userID', ParseIntPipe) userID: number ) {
        return this.usersServices.getBooksOfUser(userID);
    }
}