import { Request, Response, NextFunction } from 'express';
import logger from '../errors/logger';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    // fs.writeFileSync...
    logger("Unhandled error detected: ", err);
    res.status(500).send("Internal Server Error");
};

