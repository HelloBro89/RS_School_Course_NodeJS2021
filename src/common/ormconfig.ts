import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({
    path: path.join(__dirname, '../../.env'),
});

// need to add variable
export const config = {
    type: "postgres",
    host: process.env['POSTGRES_HOST'],
    port: process.env['POSTGRES_PORT'],
    username: process.env['POSTGRES_USER'],
    password: process.env['POSTGRES_PASSWORD'],
    database: process.env['POSTGRES_DB'],
    synchronize: true, // ToDo: replace on migrations
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectionInterval: 1000,
    entities: ['src/entities/**/*.ts'],
} as ConnectionOptions;