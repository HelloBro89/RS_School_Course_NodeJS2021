import { Controller, Post, Body/* , HttpException, HttpStatus  */ } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
// import { configOlder } from '../common/config';

@Controller('login')
export class AuthController {

  constructor(private authService: AuthService/* , private jwtService: JwtService */) { };

  @Post()
  async makeLogging(@Body() createUserDto: CreateUserDto) {

    // const foundAdmin = await this.authService.makeLogging(createUserDto);
    return this.authService.makeLogging(createUserDto);
  }

  // if (!foundAdmin) {
  //   console.log('Wrong login/password...');
  //   throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
  // } else {
  //   const { login, id } = foundAdmin;
  //   const token = this.jwtService.sign({ login, id });
  //   console.log(`${token}`);
  //   return token;

  // }
}


