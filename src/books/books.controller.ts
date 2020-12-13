import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import { BooksServices } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksServices: BooksServices) {}

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Books." }) 
    @Post('post')
    postBook( @Body() genre: CreateBookDto) {
        return this.booksServices.insert(genre);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will update properties of existing Books." }) 
    @Put('update')
    updateBook( @Body() bookDetails: UpdateBookDto) {
        return this.booksServices.update(bookDetails);
    }

    @ApiBearerAuth()
    @ApiParam({type: "number", name:"bookId"})
    @ApiResponse({ status: 200, description: "This will delete the book with given Id." }) 
    @Delete('delete')
    deleteBook( @Param() bookId: number) {
        return this.booksServices.delete(bookId);
    }
    
    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This returns the list of all the existing books in the database." }) 
    @Get()
    getAll() {
        return this.booksServices.getAllBooks();
    }
}
