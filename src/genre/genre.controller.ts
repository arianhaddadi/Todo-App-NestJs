import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; 
import GenreServices from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';

@Controller('genre')
export default class GenreController {
    constructor(private readonly genreServices: GenreServices) {}

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This will handle the creation of new Genres." }) 
    @Post('post')
    postGenre( @Body() genre: CreateGenreDto) {
        return this.genreServices.insert(genre);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "This returns the list of all the existing genres in the database." }) 
    @Get()
    getAll() {
        return this.genreServices.getAllGenre();
    }
}