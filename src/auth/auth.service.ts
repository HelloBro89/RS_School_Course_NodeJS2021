import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
// import { User } from '../users/user.entity';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService,) { };

    async makeLogging(createUserDto: CreateUserDto) {

        const checkUser = await this.userService.findUser(createUserDto.login);
        const checkBycryp = await bcrypt.compare(createUserDto.password, checkUser.password);

        if (checkUser && checkBycryp) {
            if (checkUser !== null) {
                const foundUser = { id: checkUser.id, login: checkUser.login }
                return {
                    token: this.jwtService.sign(foundUser)
                }
            };
        }

        return null;
    };
}
