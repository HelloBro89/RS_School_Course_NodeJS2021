import { NestFactory } from '@nestjs/core';
import * as bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { AppModule } from './app.module';
import { User } from './users/user.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);


  const createAdmin = (admin: {
    id?: string;
    name?: string;
    login: string;
    password: string;
  }) => {
    const adminNewPass = { ...admin, password: bcrypt.hashSync(admin.password, 10) };

    const adminRepository = getRepository(User);
    const newAdmin = adminRepository.create(adminNewPass);
    const addedAdmin = adminRepository.save(newAdmin);
    return addedAdmin;
  }
  createAdmin({ name: 'admin', login: 'admin', password: 'admin' });
}
bootstrap();
