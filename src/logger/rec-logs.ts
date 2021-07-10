import fs from 'fs';

const recordingErrors = (err: string | undefined, text?: string,) => {
    fs.appendFileSync("./logs/error.txt", `${text} ${err} \n\n`);
};

const recordingLogs = (text: string) => {

    fs.appendFileSync('./logs/log.txt', `${text}\n`);
};


export { recordingLogs, recordingErrors };