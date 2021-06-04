import fs from 'fs';

export default (text: string, err?: Error) => {
    if (err) {
        console.log(`${text} ${err.stack}`);
        fs.writeFileSync('logs.txt', `${text} ${err.stack}`);
        // fs.writeFile('logs.txt', "Hello");

    } else {
        console.log(text);
        // console.log('TESTTEST')
        // let writeableStream = fs.createWriteStream("test.txt");
        // writeableStream.write("Привет мир!");
        // writeableStream.end("Завершение записи");
    }
};