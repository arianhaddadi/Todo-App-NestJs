import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Public } from './public-decorator';
import { ApiResponse } from '@nestjs/swagger';


@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @Public()
    @UseGuards(AuthGuard("local"))
    @ApiResponse({ status: 200, description: "This is used for entering username & password in order to get authorized." }) 
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

}