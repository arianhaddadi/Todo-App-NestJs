import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger'; 
import { TodoService } from './todo.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import CreateTaskDto from './dto/create-task.dto';
import CreateCategoryDto from './dto/create-category.dto';
import CreateTagDto from './dto/create-tag.dto';
import CreateItemDto from './dto/create-item.dto';
import UpdateTaskDto from './dto/update-task.dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Tasks." }) 
    @Post('task/post')
    postTask( @Body() task: CreateTaskDto) {
        return this.todoService.insertTask(task);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the updating of existing Tasks." }) 
    @Put('task/update')
    updateTask( @Body() task: UpdateTaskDto) {
        return this.todoService.updateTask(task);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the deletion of Items." }) 
    @Delete('task/delete')
    deleteTask( @Param() taskId: number) {
        return this.todoService.deleteTask(taskId);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Categories." }) 
    @Post('category/post')
    postCategory( @Body() category: CreateCategoryDto) {
        return this.todoService.insertCategory(category);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Tasks." }) 
    @Post('tag/post')
    postTag( @Body() tag: CreateTagDto) {
        return this.todoService.insertTag(tag);
    }
    
    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Items." }) 
    @Post('item/post')
    postItem( @Body() item: CreateItemDto) {
        return this.todoService.insertItem(item);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the deletion of Items." }) 
    @Delete('item/delete')
    deleteItem( @Param() itemId: number) {
        return this.todoService.deleteItem(itemId);
    }

}
