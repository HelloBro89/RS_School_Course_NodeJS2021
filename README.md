# Task Authentification & JWT

- Migrate from express to Nest.js

- A Nest.js application should work similarly to an application that was built with express.

## To run the current application, do the following:

### Install postreSQL. All database and server settings are in the file .env

```
1. npm i
2. npm run start:dev
```

## Downloading

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

```
