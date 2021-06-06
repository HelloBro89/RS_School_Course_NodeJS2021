import { recordingErrors } from '../logger/logger';

const uncaughtException = (err: Error) => {
    recordingErrors(err, "UncaughtException error: ");
    process.exit(1);
};

const unhandledRejection = (reason: Error) => {
    recordingErrors(reason, "Unhandled rejection detected: ");
    process.exit(1);
};

export { uncaughtException, unhandledRejection };