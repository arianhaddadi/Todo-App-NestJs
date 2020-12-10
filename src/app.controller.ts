import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from './public-decorator';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @Public()
    @UseGuards(AuthGuard("local"))
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard("jwt"))
    @Get('profile')
        getProfile(@Request() req) {
            return req.user;
    }
}