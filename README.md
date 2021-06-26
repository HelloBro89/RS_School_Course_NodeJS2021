# Task 8 authentication/jwt

- git clone https://github.com/HelloBro89/RS_School_Course_NodeJS2021.git
- git checkout authentication/jwt**
- npm i
- проверь настройки файла .env (настройки своей базы данных)
- npm start
- npm run test:auth
- npm run lint


# Task 7 typeorm/posgres
- склонируй репозиторий git clone https://github.com/HelloBro89/RS_School_Course_NodeJS2021.git
- перейди в нужную ветку git checkout postgresql/typeorm
- выполни установку зависимостей npm i

** Проверь настройки своего сервера в .env файле

ПРОВЕРКА ПЕРВОЙ ЧАСТИ ЗАДАНИЯ
1. В файле src\common\ormconfig.ts установи synchronize: true
2. Выполни команду npm start
3. Выполни npm run test
4. Выполни npm run lint

ПРОВЕРКА ВТОРОЙ ЧАСТИ ЗАДАНИЯ
1. В файле src\common\ormconfig.ts установи synchronize: false
2. Измени любую сущность в любом из файлов в директории src\entities
3. Выполни команду npm run gener(в директории src\migration появится файл с миграцией) выполнится скрипт migration:generate
4. Выполни команду npm run mig (команда - migration:run)
5. Выполни команду npm run unmig (команда - migration:revert)

ЕСЛИ ЕСТЬ ЖЕЛАНИЕ, МОЖЕШЬ ВСЕ ТОЖЕ САМОЕ ПРОДЕЛАТЬ В КОНТЕЙНЕРАХ :-) НО ЭТОГО НЕТ В КРИТЕРИЯХ КРОСС ЧЕКА
- docker-compose up

# Tasks 6 docker-basic

1. docker-compose up --build

## Инструкция по запуску:
- склонируй репозиторий git clone https://github.com/HelloBro89/RS_School_Course_NodeJS2021.git
- перейди в нужную ветку git checkout docker-basics
- выполни установку зависимостей npm i
- создай images и запусти на их основе контейнеры docker-compose up --build

# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

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
For more information about OpenAPI/Swagger please visit https://swagger.io/.

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

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
