# Instruction for my repo

### The project was written in from the very beginning, including REST service and gradually transformed

This repository has a few branches. The branches are numbered. With each subsequent branch,
new tools, technologies and tasks are applied that correspond to their name.
Existing branches:

```
1. №1/logging/errorHandling
2. №2/docker/basics
3. №3/postgresql/typeorm
4. №4/authentication/jwt
5. №5/nestJS
```

Existing tags:

1. v1.0

## To run the current application, do the following:

### Install postreSQL. All database and server settings are in the file .env

```
1. git clone https://github.com/HelloBro89/RS_School_Course_NodeJS2021.git
2. npm i
3. npm run start:dev
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
