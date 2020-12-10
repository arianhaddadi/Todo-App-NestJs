import { Injectable } from '@nestjs/common';
import { UserServices } from 'src/User/user.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserServices,
        private jwtService: JwtService
    ) {}



    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (user && compareSync(pass, user.password)) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
