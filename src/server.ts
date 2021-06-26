import { app } from './app';
import { config } from './common/config'
import { connectionDB } from './helpers/connectdb';
import { usersRepo } from './resources/users/user.memory.repository';



const { PORT } = config;

(async () => {
  await connectionDB();
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App is running on http://localhost:${PORT}`);
    usersRepo.createAdmin({ name: 'admin', login: 'admin', password: 'admin' });
  })
})();


