import { Module } from '@nestjs/common';
import { UserServices } from './user.service';
import { UserController } from './user.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        UserServices,
        {
            provide: APP_GUARD,
            useClass: AuthGuard("jwt")
        }
    ],
})
export class UserModule {}