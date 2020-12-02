import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { GenreModule } from './genre/genre.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BooksModule, GenreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
