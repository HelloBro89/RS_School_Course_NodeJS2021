import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'korpik',
    database: 'test',
    synchronize: true,
    dropSchema: true,
    entities: ["build/**/*.entity{.ts,.js}"],
};
