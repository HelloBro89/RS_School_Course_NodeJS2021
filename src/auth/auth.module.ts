import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { configOlder } from '../common/config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: configOlder.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: '24h',
      }
    }),
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule { }
