import { Injectable, NestInterceptor, ExecutionContext, Logger, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { recordingLogs } from './rec-logs';



Injectable()
export class LogingInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        calls: CallHandler<any>
    ): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const res = context.switchToHttp().getResponse();
        const { url } = req;
        const { body } = req;
        const { query } = req;
        const { statusCode } = res;

        if (url === 'test') { console.log(this) };

        recordingLogs(`URL: ${url}; \n Query Parameters: ${JSON.stringify(query)}; \n Body: ${JSON.stringify(body)} \n StatusCode: ${statusCode}`);

        return calls
            .handle()
            .pipe(
                tap(() => Logger.log(`URL: ${url}; \n Query Parameters: ${JSON.stringify(query)}; \n Body: ${JSON.stringify(body)} \n StatusCode: ${statusCode}`)
                )
            )
    }
}