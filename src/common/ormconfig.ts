import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configOlder } from './config';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: configOlder.POSTGRES_HOST,
    port: Number(configOlder.POSTGRES_PORT),
    username: configOlder.POSTGRES_USER,
    password: configOlder.POSTGRES_PASSWORD,
    database: configOlder.POSTGRES_DB,
    synchronize: true,
    dropSchema: true,
    entities: ["build/**/*.entity{.ts,.js}"],
};
