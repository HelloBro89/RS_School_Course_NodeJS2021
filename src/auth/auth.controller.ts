import { Controller, Post, Body/* , HttpException, HttpStatus  */ } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
// import { configOlder } from '../common/config';

@Controller('login')
export class AuthController {

  constructor(private authService: AuthService) { };

  @Post()
  async makeLogging(@Body() createUserDto: CreateUserDto) {

    // const foundAdmin = await this.authService.makeLogging(createUserDto);
    return this.authService.makeLogging(createUserDto);
  }
}


