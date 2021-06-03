import Express from 'express';
import SwaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';
import { finished } from 'stream';
import { routerUser } from './resources/users/user.router';
import { routerBoard } from './resources/boards/board.router';
import errorHandler from './errorHandler/error.handler'

const app = Express();
const swaggerDocument = YAML.load(
  path.join(dirname(fileURLToPath(import.meta.url)), '../doc/api.yaml')
);

process.on('uncaughtException', (error: { message: string; stack: string; }) => {
  console.error(`uncaughtException error: ${error.stack}`);
  // fs.writeFileSync...
  process.exit(1);
});

process.on('unhandledRejection', (reason: { message: string; stack: string; },) => {
  // fs.writeFileSync...
  console.error(`Unhandled rejection detected: ${reason.stack}`);
});


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
  const { query } = req;
  const { url } = req;
  const { body } = req;

  next();

  finished(res, () => {
    const { statusCode } = res;
    console.log(`URL: ${url} \n Query Parameters: ${JSON.stringify(query)} \n Body: ${JSON.stringify(body)} \n StatusCode: ${statusCode}`);
  });
});

app.use('/users', routerUser);
app.use('/boards', routerBoard);
app.use(errorHandler);

export { app };
