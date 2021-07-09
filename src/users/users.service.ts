import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Task } from '../tasks/task.entity';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Task) private taskRepository: Repository<Task>) { };

    async createUser(createUserDto: CreateUserDto) {
        const userNewPass = { ...createUserDto, password: bcrypt.hashSync(createUserDto.password, 10) };
        const user = this.userRepository.create(userNewPass);
        return this.userRepository.save(user);
    };

    async findUser(login: string) {
        const userLogin = await this.userRepository.findOne({ login });

        if (!userLogin) {
            throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
        }
        return userLogin;
    }

    async getAll() {
        const users = await this.userRepository.find({ where: {} });
        return users;
    };

    async getById(id: string) {
        const userID = await this.userRepository.findOne(id);
        return userID;
    };

    async updateUser(id: string, updateUserDto: UpdateUserDto) {
        const userNewPass = { ...updateUserDto, password: bcrypt.hashSync(updateUserDto.password, 10) };
        const changedUser = await this.userRepository.update(id, userNewPass);
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
