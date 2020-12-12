import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})

export class TodoModule {}
