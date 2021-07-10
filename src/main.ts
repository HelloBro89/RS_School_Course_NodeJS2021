import { NestFactory } from '@nestjs/core';
import * as bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { INestApplication } from '@nestjs/common';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { User } from './users/user.entity';
import { configOlder } from './common/config';


async function bootstrap() {
  let app: INestApplication;
  if (configOlder.USE_FASTIFY) {
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    )

  } else {

    app = await NestFactory.create(AppModule);
  };

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
