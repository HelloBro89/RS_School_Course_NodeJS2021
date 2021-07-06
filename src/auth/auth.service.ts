import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService,) { };

    async makeLogging(createUserDto: CreateUserDto) {

        const checkUser = await this.valUser(createUserDto);
        if (checkUser !== null) return this.tokenGen(checkUser);
        return null;
    };

    private async tokenGen(checkUser: User) {
        const foundUser = { id: checkUser.id, login: checkUser.login }

        return {
            token: this.jwtService.sign(foundUser)
        }
    }

    private async valUser(createUserDto: CreateUserDto) {
        const checkUser = await this.userService.findUser(createUserDto.login);
        const checkBycryp = await bcrypt.compare(createUserDto.password, checkUser.password);

        if (checkUser && checkBycryp) {
            return checkUser;
        }
        return null;
    }




    // const checkUser = await this.userService.checkUser(createUserDto.login);

    // const checkBycrypt = await bcrypt.compare(createUserDto.password, checkUser.password);
    // // console.log(checkUser);

    // if (checkBycrypt) {
    //     return checkUser;
    // }
    // return null;

}
