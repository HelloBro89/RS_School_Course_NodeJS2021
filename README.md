# Task Logging & Error Handling

Add logging functionality to already existing REST service.

- Add express middleware which will log incoming requests to service (at least url, query parameters, body) and response status code.
- Add express middleware which will log all unhandled errors and return a standard message with HTTP code 500 (Internal Server Error).
- Add listener and logging to uncaughtException.
- Add listener and logging to unhandledRejection.
- Writing to process.stdou or to a file both can be used for logging. Any third-party logging library can also be used for this purpose.

## To run the current application, do the following:

### Install postreSQL. All database and server settings are in the file .env

1. npm i
2. npm run start

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
