import { Body, Controller, Get, Post } from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger'; 
import { BooksServices } from './books.service';
import CreateBookDto from './dto/create-book.dto';


@Controller('books')
export class BooksController {
    constructor(private readonly booksServices: BooksServices) {}

    @ApiResponse({ status: 200, description: "postBook() will handle the creation of new Books." }) 
    @Post('post')
    postBook( @Body() genre: CreateBookDto) {
        return this.booksServices.insert(genre);
    }

    @ApiResponse({ status: 200, description: "getAll() returns the list of all the existing books in the database." }) 
    @Get()
    getAll() {
        return this.booksServices.getAllBooks();
    }
}
