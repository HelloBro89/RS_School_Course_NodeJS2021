import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// path.join(dirname(fileURLToPath(import.meta.url))) 
const recordingErrors = (err: Error, text?: string,) => {
    console.error(`${text} ${err.stack}\n\n`);
    fs.appendFileSync("error.txt", `${text} ${err.stack} \n\n`);
};

const recordingLogs = (text: string) => {
    console.log(text);
    fs.appendFileSync('log.txt', `${text}\n`);
};


export { recordingLogs, recordingErrors };