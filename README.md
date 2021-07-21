# Task 8 authentication/jwt

- git clone https://github.com/HelloBro89/RS_School_Course_NodeJS2021.git
- git checkout authentication/jwt
- npm i
- проверь настройки файла .env (настройки своей базы данных)
- npm start
- npm run test:auth
- npm run lint

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
