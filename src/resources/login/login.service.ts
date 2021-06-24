import { getRepository } from 'typeorm';
import jsw from 'jsonwebtoken';
import { User } from '../../entities/user';
import { config } from '../../common/config';




const signUser = async (userLogin: string, userPassword: string) => {
    const foundUser = getRepository(User);
    const objUsers = await foundUser.findOne({ where: { login: userLogin, password: userPassword } });
    if (!objUsers) {
        return null;
    };
    const { login, password } = objUsers;
    const token = jsw.sign({ login, password }, config.JWT_SECRET_KEY!);
    return token;
};

export { signUser };