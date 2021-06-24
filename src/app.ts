import Express from 'express';
import SwaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import { finished } from 'stream';
import { routerUser } from './resources/users/user.router';
import { routerBoard } from './resources/boards/board.router';
import { routerLogin } from './resources/login/login.router';
import errorHandler from './middleware/error.handler';
import { recordingLogs } from './logger/logger';
import { uncaughtException, unhandledRejection } from './middleware/events';

const app = Express();

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(Express.json());
app.use('/doc', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  // test error 500
  // throw new Error("Ops!!!");
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();

});

app.use((req, res, next) => {
  // test error 500
  // throw new Error("Ops!!!");
  const { query } = req;
  const { url } = req;
  const { body } = req;

  recordingLogs(`URL: ${url}; \n Query Parameters: ${JSON.stringify(query)}; \n Body: ${JSON.stringify(body)};`);

  next();

  finished(res, () => {
    const { statusCode } = res;
    recordingLogs(`StatusCode: ${statusCode}; \n`);
  });
});

app.use('/users', routerUser);

app.use('/login', routerLogin);

app.use('/boards', routerBoard);



app.use(errorHandler);

process.on('uncaughtException', uncaughtException);
process.on('unhandledRejection', unhandledRejection);

// Testing uncaughtException 
// throw Error('UncaughtException!!!');

// Testing unhandledRejection 
// Promise.reject(new Error('UnhandledRejection!!!'));

export { app };
