import fs from 'fs';
// import path, { dirname } from 'path';
// import { fileURLToPath } from 'url';
// path.join(dirname(fileURLToPath(import.meta.url))) 

// const writeableStreamLogs = fs.createWriteStream('D:/WorkJS/RS_School_Course_NodeJS2021/build/errors/log.txt'/* , { flags: "a" } */);
// const writeableStreamErrors = fs.createWriteStream('D:/WorkJS/RS_School_Course_NodeJS2021/build/errors/errors.txt');

export default (text: string, err?: Error) => {
    if (err) {
        console.error(`${text} ${err.stack}`);
        fs.appendFileSync('D:/WorkJS/RS_School_Course_NodeJS2021/build/errors/errors.txt', `${text} ${err.stack}`);
        // fs.writeFileSync('D:/WorkJS/RS_School_Course_NodeJS2021/build/errors/errors.txt', `${text} ${err.stack}`);
        // writeableStreamErrors.write(`${text} ${err.stack}`);
    } else {
        console.log(text);
        fs.appendFileSync("D:/WorkJS/RS_School_Course_NodeJS2021/build/errors/log.txt", `${text}`);
        // fs.writeFileSync("D:/WorkJS/RS_School_Course_NodeJS2021/build/errors/log.txt", `${text}`);
        // writeableStreamLogs.write(text);
    }
};