import console from 'console';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../common/config';

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
                console.log('****************************************************');
                console.log(req.headers.authorization);
                console.log('****************************************************');
                const test = jwt.verify(token!, config.JWT_SECRET_KEY!);
                console.log(test);
                next();
            } catch (err) {
                console.log(err);
                res.status(401).send('Unauthorized user!');
            }
        }
    }
};
export { authorization };