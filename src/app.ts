import Express, { Request, Response, NextFunction } from 'express';
import SwaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';
import { finished } from 'stream';
import { routerUser } from './resources/users/user.router';
import { routerBoard } from './resources/boards/board.router';

const app = Express();
const swaggerDocument = YAML.load(
  path.join(dirname(fileURLToPath(import.meta.url)), '../doc/api.yaml')
);

process.on('uncaughtException', (error: { message: string; stack: string; }) => {
  console.error(`captured error: ${error.stack}`);
  // fs.writeFileSync...
  process.exit(1);
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


// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: { message: string; stack: string }, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err.stack);
  res.status(500).send("Internal Server Error");
});

export { app };
