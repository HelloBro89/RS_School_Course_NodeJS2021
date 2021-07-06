import { JwtService } from '@nestjs/jwt';
import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
// import { config } from '../common/ormconfig';
// import { configOlder } from '../common/config';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) { };

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const sessionToken = req.headers.authorization;

            const type = sessionToken.split(' ')[0];
            const token = sessionToken.split(' ')[1];
            if (type !== 'Bearer' || !token) {
                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
            }

            /* const receivedUser =  */this.jwtService.verify(token);
            // console.log(receivedUser);
            return true;

        } catch (err) {
            console.log(err);
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
    }

}


