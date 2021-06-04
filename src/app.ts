import Express from 'express';
import SwaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';
import { finished } from 'stream';
import { routerUser } from './resources/users/user.router';
import { routerBoard } from './resources/boards/board.router';
import errorHandler from './middleware/error.handler';
import logger from './middleware/logger';


const app = Express();
const swaggerDocument = YAML.load(
  path.join(dirname(fileURLToPath(import.meta.url)), '../doc/api.yaml')
);

app.use(Express.json());

app.use('/doc', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
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

  next();

  finished(res, () => {
    const { statusCode } = res;
    logger(`URL: ${url} \n Query Parameters: ${JSON.stringify(query)} \n Body: ${JSON.stringify(body)} \n StatusCode: ${statusCode}`);
  });
});

app.use('/users', routerUser);
app.use('/boards', routerBoard);
app.use(errorHandler);


process.on('uncaughtException', (err: Error) => {
  logger("UncaughtException error: ", err);
  // fs.writeFileSync...
  process.exit(1);
});

process.on('unhandledRejection', (reason: Error) => {
  // fs.writeFileSync...
  logger("Unhandled rejection detected: ", reason);
  process.exit(1);
});

// Testing uncaughtException 
// throw Error('UncaughtException!!!');

// Testing unhandledRejection 
// Promise.reject(new Error('UnhandledRejection!!!'));




export { app };
