import fs from 'fs';

const recordingErrors = (err: Error, text?: string,) => {
    console.error(`${text} ${err.stack}\n\n`);
    fs.appendFileSync("./logs/error.txt", `${text} ${err.stack} \n\n`);
};

const recordingLogs = (text: string) => {
    console.log(text);
    fs.appendFileSync('./logs/log.txt', `${text}\n`);
};


export { recordingLogs, recordingErrors };