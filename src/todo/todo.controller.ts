import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger'; 
import { TodoService } from './todo.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import CreateTaskDto from './dto/create-task.dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @ApiResponse({ status: 200, description: "This will handle the creation of new Tasks" }) 
    @Post('post')
    postUser( @Body() task: CreateTaskDto) {
        return this.todoService.insert(user);
    }

    // @ApiBearerAuth()
    // @ApiResponse({ status: 200, description: "This returns the list of all the existing users in the database" }) 
    // @Get()
    // getAll() {
    //     return this.todoService.getAllUsers();
    // }

    // @ApiBearerAuth()
    // @ApiResponse({ status: 200, description: "This return all the books which are associated with the user provided through 'userID' by the request" })   
    // @Get('books')
    // getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    //     return this.todoService.getBooksOfUser(userID);
    }
}
