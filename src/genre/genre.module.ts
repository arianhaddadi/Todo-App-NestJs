import { Module } from '@nestjs/common';
import GenreServices from './genre.service';
import GenreController from './genre.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Module({
  imports: [],
  controllers: [GenreController],
  providers: [
    GenreServices,
    {
      provide: APP_GUARD,
      useClass: AuthGuard("jwt")
    }
  ],
})
export default class GenreModule {}