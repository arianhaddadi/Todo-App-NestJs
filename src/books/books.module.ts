import { Module } from '@nestjs/common';
import { BooksServices } from './books.service';
import {BooksController} from './books.controller';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksServices],
})
export default class BooksModule {}