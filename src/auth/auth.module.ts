import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserServices } from 'src/User/user.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({ 
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [AuthService, LocalStrategy, UserServices, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}