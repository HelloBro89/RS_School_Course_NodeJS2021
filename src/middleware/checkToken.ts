import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../common/config';
import { recordingErrors } from '../logger/logger';

const authorization = (req: Request, res: Response, next: NextFunction) => {
    const sessionToken = req.headers.authorization;

    if (sessionToken === undefined) {
        res.status(401).send('Unauthorized user!');
    } else {
        const [type, token] = sessionToken.split(' ');
        if (type !== 'Bearer') {
            res.status(401).send('Unauthorized user')
        } else {
            try {

                jwt.verify(token!, config.JWT_SECRET_KEY!);

                next();
            } catch (err) {
                recordingErrors(err);
                res.status(401).send('Unauthorized user!');
            }
        }
    }
};
export { authorization };