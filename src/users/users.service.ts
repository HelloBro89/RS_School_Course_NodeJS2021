/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    async getAll() {
        const usersRepository = getRepository(User);
        const arrUsers = await usersRepository.find({ where: {} })

        return arrUsers;

    };

    async getById(id: string) {
        const usersRepository = getRepository(User);
        return usersRepository.findOne(id);
    };

    async createUser(createUserDto: CreateUserDto) {
        // const adminNewPass = { ...admin, password: bcrypt.hashSync(admin.password, 10) };

        const usersRepository = getRepository(User);
        const newAdmin = usersRepository.create(createUserDto);
        const addedAdmin = await usersRepository.save(newAdmin);
        return User.toResponse(addedAdmin);

    };

    async updateUser(id: string, updateUserDto: UpdateUserDto) {
        // const userNewPass = { ...body, password: bcrypt.hashSync(body.password, 10) };

        const usersRepository = getRepository(User);
        usersRepository.update(id, updateUserDto);
        return User.toResponse(updateUserDto);

    };

    async deleteUser(id: string) {
        // const tasksRepository = getRepository(Task);

        // const arrayOfTasks = await tasksRepository.find({ where: { userId: id } });
        // if (arrayOfTasks.length > 0) {
        //   for (let i = 0; i < arrayOfTasks.length; i += 1) {
        //     const idTasks = arrayOfTasks[i]!.id;
        //     const newObj = { ...arrayOfTasks[i], userId: null };
        //     tasksRepository.update(idTasks, newObj)
        //   }
        // }

        const usersRepository = getRepository(User);
        const res = usersRepository.findOne(id);
        usersRepository.delete(id);
        return res;
    }

}
