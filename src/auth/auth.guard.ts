import { JwtService } from '@nestjs/jwt';
import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) { };

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        try {
            const sessionToken = request.headers.authorization;
            if (!sessionToken) {

                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
            }
            const [type, token] = sessionToken.split(' ');

            if (type !== 'Bearer' || !token) {
                throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
            }
            this.jwtService.verify(token);
            return true;

        } catch (err) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
    }
}


