import { Injectable } from '@nestjs/common';
import { UserServices } from 'src/User/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserServices) {}
}
