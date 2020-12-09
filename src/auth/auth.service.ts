import { Injectable } from '@nestjs/common';
import { UserServices } from 'src/User/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserServices) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
    }
}
