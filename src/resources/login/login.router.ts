import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { signUser } from './login.service';
import { config } from '../../common/config';
// import bcrypt from 'bcryptjs';

const routerLogin = Router();

routerLogin.route('/').post(async (req: Request, res: Response) => {
    const foundUser = await signUser(req.body.login, req.body.password);
    if (!foundUser) {
        console.log('Wrong login/id...');
        res.status(403).send('Wrong login/password...');
    } else {
        const { login, id } = foundUser;
        const token = jwt.sign({ login, id }, config.JWT_SECRET_KEY!);
        console.log(token);
        res.status(200).json({ token });
    }
});

export { routerLogin };
