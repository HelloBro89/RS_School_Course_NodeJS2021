# Task Authentification & JWT

- POST /users should accept password field and before save replace it with hash (use bcrypt package).
- Add a POST /login method which accepts JSON with login and password and should return JWT token in response body: { token: <jwt_token> } (use jsonwebtoken package).
- JWT token should contain userId and login in a payload.
- Secret that used for signing the token should be stored in .env file.
- For all client requests the JWT token should be added in HTTP Authorization header to all requests that requires authentication. HTTP authentication must follow Bearer scheme, e.g.:
- Authorization: Bearer <jwt_token>
- Add a middleware which will proxy all the requests (except /login) and check that HTTP Authorization header has the correct value of JWT token.
- In case of the HTTP Authorization header in the request is absent or invalid or doesn’t follow Bearer scheme, the middleware should stop further router method execution and return HTTP 401 code (Unauthorized error) and the corresponding error message.
- Add admin user to DB on service start with login = admin and password = admin

## To run the current application, do the following:

### Install postreSQL. All database and server settings are in the file .env

```
1. npm i
2. npm start
```

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
