import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { signUser } from './login.service';
import { config } from '../../common/config';
import { recordingLogs } from '../../logger/logger';

const routerLogin = Router();

routerLogin.route('/').post(async (req: Request, res: Response) => {
    const foundAdmin = await signUser(req.body.login, req.body.password);
    if (!foundAdmin) {
        recordingLogs('Wrong login/password...');
        res.status(403).send('Wrong login/password...');
    } else {
        const { login, id } = foundAdmin;
        const token = jwt.sign({ login, id }, config.JWT_SECRET_KEY!);
        recordingLogs(`Bearer ${token}`);
        res.status(200).json({ token });
    }
});

export { routerLogin };
