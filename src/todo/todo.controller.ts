import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger'; 
import { TodoService } from './todo.service';
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
    @Post('tasks/post')
    postTask( @Body() task: CreateTaskDto) {
        return this.todoService.insertTask(task);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the updating of existing Tasks." }) 
    @Put('tasks/update')
    updateTask( @Body() task: UpdateTaskDto) {
        return this.todoService.updateTask(task);
    }

    @ApiBearerAuth()
    @ApiParam({type: "number", name:"taskId"})
    @ApiResponse({ status: 200, description: "This will handle the deletion of Items." }) 
    @Delete('tasks/delete')
    deleteTask( @Param() taskId: number) {
        return this.todoService.deleteTask(taskId);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Categories." }) 
    @Post('categories/post')
    postCategory( @Body() category: CreateCategoryDto) {
        return this.todoService.insertCategory(category);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Tasks." }) 
    @Post('tags/post')
    postTag( @Body() tag: CreateTagDto) {
        return this.todoService.insertTag(tag);
    }
    
    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Items." }) 
    @Post('items/post')
    postItem( @Body() item: CreateItemDto) {
        return this.todoService.insertItem(item);
    }

    @ApiBearerAuth()
    @ApiParam({type: "number", name:"itemId"})
    @ApiResponse({ status: 200, description: "This will handle the deletion of Items." }) 
    @Delete('items/delete')
    deleteItem( @Param() itemId: number) {
        return this.todoService.deleteItem(itemId);
    }

}
