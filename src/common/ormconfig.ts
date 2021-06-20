import { ConnectionOptions } from 'typeorm';
import { config } from "./config";
// import dotenv from 'dotenv';
// import path from 'path';


// dotenv.config({
//     path: path.join(__dirname, '../../.env'),
// });

export = {
    type: "postgres",
    host: config.POSTGRES_HOST,
    port: Number(config.POSTGRES_PORT),
    username: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DB,
    synchronize: false,
    entities: ['./src/entities/**/*.ts'],
    dropSchema: true,
    migrationsRun: true,
    migrations: [
        "src/migration/**/*.ts"
    ],
    cli: {
        "migrationsDir": "src/migration"
    }
} as ConnectionOptions;
