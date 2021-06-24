import { Router, Request, Response/* , NextFunction */ } from 'express';
import { signUser } from './login.service';
// import bcrypt from 'bcryptjs';


const routerLogin = Router();

routerLogin.route('/').post(async (req: Request, res: Response/* , next: NextFunction */) => {
    const { login, password } = req.body;
    const token = await signUser(login, password);
    if (!token) {
        console.log('Wrong login/id...');
        res.status(403).send('Wrong login/id...');
    } else {
        console.log(token);
        res.status(200).json(token);
    }
});


export { routerLogin };
