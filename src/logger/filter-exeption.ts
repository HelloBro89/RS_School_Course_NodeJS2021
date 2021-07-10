import {
    ExceptionFilter, Catch, ArgumentsHost, HttpException,/* , Logger */
    Logger
} from '@nestjs/common';
import { Request, Response } from 'express';
import { recordingErrors } from './rec-logs';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        const errors = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            body: request.body,
            query: request.query,
            method: request.method
        }

        if (status === 5555) { console.log(this) };

        recordingErrors(exception.stack)
        Logger.error(`${JSON.stringify(errors)}`);

        // Logger.error(`URL: ${JSON.stringify(errors.path)} Body: ${JSON.stringify(errors.body)} ${JSON.stringify(errors.query)}`, 'ExceptionFilter');

        response
            .status(status)
            .json(errors);
    }
}