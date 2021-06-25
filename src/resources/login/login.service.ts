import { getRepository } from 'typeorm';
import { User } from '../../entities/user';


const signUser = async (userLogin: string, userPassword: string) => {
    const foundUser = getRepository(User);
    const objUsers = await foundUser.findOne({ where: { login: userLogin, password: userPassword } });
    if (!objUsers) {
        return null;
    }
    return objUsers;
};

export { signUser };