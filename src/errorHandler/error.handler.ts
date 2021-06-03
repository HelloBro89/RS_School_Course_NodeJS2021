import { Request, Response, NextFunction } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: { message: string; stack: string }, _req: Request, res: Response, _next: NextFunction) => {
    // fs.writeFileSync...
    console.error(`Unhandled error detected: ${err.stack}`);
    res.status(500).send("Internal Server Error");
};

