import { Injectable } from '@nestjs/common';
import { UserServices } from 'src/User/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserServices) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (user && user.password == pass) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }
}
