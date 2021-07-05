import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { Task } from '../tasks/task.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { };

    async createUser(createUserDto: CreateUserDto) {
        // const adminNewPass = { ...admin, password: bcrypt.hashSync(admin.password, 10) };

        const user = await this.userRepository.create(createUserDto);
        return this.userRepository.save(user);

        // const usersRepository = getRepository(User); 
        // const newUser = usersRepository.create(createUserDto);
        // const addedUser = await usersRepository.save(newUser);
        // return addedUser;

    };

    async getAll() {

        const users = await this.userRepository.find({ where: {} });
        return users;
        // const usersRepository = getRepository(User);
        // const arrUsers = await usersRepository.find({ where: {} })
        // return arrUsers;

    };

    async getById(id: string) {

        const userID = await this.userRepository.findOne(id);
        return userID;
        // const usersRepository = getRepository(User);
        // return usersRepository.findOne(id);
    };


    async updateUser(id: string, updateUserDto: UpdateUserDto) {
        // const userNewPass = { ...body, password: bcrypt.hashSync(body.password, 10) };

        const changedUser = await this.userRepository.update(id, updateUserDto);
        return changedUser;
        // const usersRepository = getRepository(User);
        // usersRepository.update(id, updateUserDto);
        // return User.toResponse(updateUserDto);

    };

    async deleteUser(id: string) {
        // const tasksRepository = getRepository(Task);

        // const arrayOfTasks = await this.userRepository.find({ where: { userId: id } });
        // if (arrayOfTasks.length > 0) {
        //     for (let i = 0; i < arrayOfTasks.length; i += 1) {
        //         const idTasks = arrayOfTasks[i]!.id;
        //         const newObj = { ...arrayOfTasks[i], userId: null };
        //         tasksRepository.update(idTasks, newObj)
        //     }
        // }

        const deletedUser = await this.userRepository.findOne(id);
        await this.userRepository.delete(id);
        return deletedUser;


        // const usersRepository = getRepository(User);
        // const res = usersRepository.findOne(id);
        // usersRepository.delete(id);
        // return res;
    }

}
