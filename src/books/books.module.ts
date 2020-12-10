import { Module } from '@nestjs/common';
import { BooksServices } from './books.service';
import {BooksController} from './books.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [
    BooksServices,
    {
      provide: APP_GUARD,
      useClass: AuthGuard("jwt")
    }
  ],
})
export default class BooksModule {}