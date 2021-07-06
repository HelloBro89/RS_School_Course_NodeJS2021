import { JwtService } from '@nestjs/jwt';
import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
// import { config } from '../common/ormconfig';
// import { configOlder } from '../common/config';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) { };

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const sessionToken = context.switchToHttp().getRequest();
        // const forSplit = sessionToken.headers.authorization;
        console.log('*********************************');
        console.log(sessionToken);
        // console.log(forSplit);
        console.log('*********************************');
        if (sessionToken === undefined) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        } else {

            const [type, token] = sessionToken.split(' ');
            // console.log("token");
            if (type !== 'Bearer') {
                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
            } else {
                try {
                    this.jwtService.verify(token);
                    return true;

                } catch (err) {
                    console.log(err);
                    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
                }
            }
        }
    }
}

