import { Injectable } from '@nestjs/common';
import { UserServices } from 'src/User/user.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserServices,
        private jwtService: JwtService
    ) {}



    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (user) {
            let passwordValidationResult;
            bcrypt.compare(pass, user.password, function(err, result) {
                if (result) {
                    passwordValidationResult = result;
                }
            });
            if (passwordValidationResult) {
                const {password, ...result} = user;
                return result;
            }
            else return null;
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
