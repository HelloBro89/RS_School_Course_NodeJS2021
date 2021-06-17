import { app } from './app';
import { config } from './common/config';
import { /* expConnectToDB */connectionDB } from './helpers/connectdb';

const { PORT } = config;

(async () => {
  await connectionDB();
  app.listen(PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`App is running on http://localhost:${PORT}`)
  );
})();

// start();

// connectionDB(() => {
//   app.listen(PORT, () =>
//     console.log(`App is running on http://localhost:${PORT}`)
//   );
// })

