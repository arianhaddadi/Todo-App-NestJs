import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger'; 
import { BooksServices } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';


@Controller('books')
export class BooksController {
    constructor(private readonly booksServices: BooksServices) {}

    @ApiResponse({ status: 200, description: "This will handle the creation of new Books." }) 
    @Post('post')
    postBook( @Body() genre: CreateBookDto) {
        return this.booksServices.insert(genre);
    }

    @ApiResponse({ status: 200, description: "This will update properties of existing Books." }) 
    @Put('update')
    updateBook( @Body() bookDetails: UpdateBookDto) {
        return this.booksServices.update(bookDetails);
    }

    @ApiResponse({ status: 200, description: "This will update properties of existing Books." }) 
    @Delete('delete')
    deleteBook( @Param() bookId: number) {
        return this.booksServices.delete(bookId);
    }
    
    @ApiResponse({ status: 200, description: "This returns the list of all the existing books in the database." }) 
    @Get()
    getAll() {
        return this.booksServices.getAllBooks();
    }
}
