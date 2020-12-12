import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import { UserServices } from './user.service';
import { Public } from 'src/public-decorator';
import CreateUserDto from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly usersServices: UserServices) {}

    @ApiResponse({ status: 200, description: "This will handle the creation of new Users" }) 
    @Public()
    @Post('post')
    postUser( @Body() user: CreateUserDto) {
        return this.usersServices.insert(user);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This returns the list of all the existing users in the database" }) 
    @Get()
    getAll() {
        return this.usersServices.getAllUsers();
    }
}