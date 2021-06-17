export type Test = {
    type: string,
    name: string,
    host: string | undefined,
    port: string | undefined,
    username: string | undefined,
    password: string | undefined,
    database: string | undefined,
    autoReconnect: boolean
};