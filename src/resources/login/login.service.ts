import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { User } from '../../entities/user';

const signUser = async (login: string, userPassword: string) => {
    // const login = 'admin';
    // const id = '1';
    const foundUser = getRepository(User);
    const admin = await foundUser.findOne({ login });

    const checkBycrypt = await bcrypt.compare(userPassword, admin!.password);
    if (checkBycrypt) {
        return admin;
    }
    return null;
};

export { signUser };