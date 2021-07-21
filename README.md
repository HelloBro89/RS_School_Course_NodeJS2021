# Tasks Docker basics

- Create .dockerignore file and list all files that should be ignored by Docker
- Create Dockerfile that will be used for building image of PostgreSQL database
- Create Dockerfile that will be used for building image of express application
- Create docker-compose.yml file that will be used for running multi-container application (express application and PostgreSQL database). Specify custom network that will be used for communication between application and database containers
- Build images and scan it for security vulnerabilities
- Push built images to your private repository on Docker Hub

## To run the current application, do the following:

### Install postreSQL. All database and server settings are in the file .env

1. npm i
2. docker-compose up --build

## Инструкция по запуску:

- склонируй репозиторий git clone https://github.com/HelloBro89/RS_School_Course_NodeJS2021.git
- перейди в нужную ветку git checkout docker-basics
- выполни установку зависимостей npm i
- создай images и запусти на их основе контейнеры docker-compose up --build

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
