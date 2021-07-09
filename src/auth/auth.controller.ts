import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('login')
export class AuthController {

  constructor(private authService: AuthService) { };

  @Post()
  async makeLogging(@Body() createUserDto: CreateUserDto) {
    return this.authService.makeLogging(createUserDto);
  }
}


