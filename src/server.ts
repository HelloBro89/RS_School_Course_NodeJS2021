import { app } from './app';
import { config } from './common/config';
import { expConnectToDB } from './helpers/pgdb';

const { PORT } = config;


expConnectToDB(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
})

