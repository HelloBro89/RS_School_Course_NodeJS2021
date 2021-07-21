# Task PostgreSQL & Typeorm

- Use PostgreSQL database to store REST service data (Users, Boards, Tasks).

- Use Typeorm to store and update data.

- The information on DB connection should be stored in .env file and should be passed to the application using the environment variables with the help of the following dotenv package.

## To run the current application, do the following:

### Install postreSQL. All database and server settings are in the file .env

1. npm i
2. in the file src\common\ormconfig.ts install synchronize: true
3. change any entity in any of the files in the directory src\entities
4. npm start
5. npm run gener (in the directory src\migration a file with migration will appear) the script will be executed migration:generate
6. npm run mig (script - migration:run)
7. npm run unmig (script - migration:revert)

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

### Auto-fix and format

```
npm run lint
```
