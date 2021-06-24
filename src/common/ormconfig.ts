import { ConnectionOptions } from 'typeorm';
import { config } from "./config";


export = {
    type: "postgres",
    host: config.POSTGRES_HOST || 'postgres',
    port: Number(config.POSTGRES_PORT) || '5432',
    username: config.POSTGRES_USER || 'postgres',
    password: config.POSTGRES_PASSWORD || 'postgres',
    database: config.POSTGRES_DB || 'postgres',
    synchronize: true,
    entities: ['./src/entities/**/*.ts'],
    dropSchema: false,
    migrationsRun: true,
    migrations: [
        "src/migration/**/*.ts"
    ],
    cli: {
        "migrationsDir": "src/migration"
    }
} as ConnectionOptions;
