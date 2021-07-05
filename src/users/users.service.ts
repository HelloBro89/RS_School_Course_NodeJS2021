import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Task } from '../tasks/task.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Task) private taskRepository: Repository<Task>) { };

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    };

    async getAll() {
        const users = await this.userRepository.find({ where: {} });
        return users;
    };

    async getById(id: string) {
        const userID = await this.userRepository.findOne(id);
        return userID;
    };

    async updateUser(id: string, updateUserDto: UpdateUserDto) {
        // const userNewPass = { ...body, password: bcrypt.hashSync(body.password, 10) };
        const changedUser = await this.userRepository.update(id, updateUserDto);
        return changedUser;
    };

    async deleteUser(id: string) {
        const arrayOfTasks = await this.taskRepository.find({ where: { userId: id } });
        if (arrayOfTasks.length > 0) {
            for (let i = 0; i < arrayOfTasks.length; i += 1) {
                const idTasks = arrayOfTasks[i]!.id;
                const newObj = { ...arrayOfTasks[i], userId: null };
                this.taskRepository.update(idTasks, newObj)
            }
        }

        const deletedUser = await this.userRepository.findOne(id);
        await this.userRepository.delete(id);
        return deletedUser;
    }
}
