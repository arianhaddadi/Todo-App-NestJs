import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import UserEntity from './db/entity/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TodoModule } from './todo/todo.module';
import CategoryEntity from './db/entity/category.entity';
import ItemEntity from './db/entity/item.entity';
import TagEntity from './db/entity/tag.entity';
import TaskEntity from './db/entity/task.entity';

@Module({
    imports: [UserModule ,
            TypeOrmModule.forFeature(
                [UserEntity, CategoryEntity , ItemEntity, TagEntity, TaskEntity],
            ),
            TypeOrmModule.forRoot(),
            AuthModule,
            TodoModule
            ],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard
        }
    ],
})
export class AppModule {}