import { Request, Response, NextFunction } from 'express';
import { recordingErrors } from '../logger/logger';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    // fs.writeFileSync...
    recordingErrors(err, "Unhandled error detected: ");
    res.status(500).send("Internal Server Error");
};

