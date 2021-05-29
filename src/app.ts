import Express from 'express';
import SwaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yamljs';
import { routerUser } from './resources/users/user.router';
import { routerBoard } from './resources/boards/board.router';

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

app.use('/users', routerUser);
app.use('/boards', routerBoard);

export { app };
