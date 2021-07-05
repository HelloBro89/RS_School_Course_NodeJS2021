import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) { }

    createBoard(createTaskDto: CreateTaskDto) {
        const task = this.taskRepository.create(createTaskDto);
        return this.taskRepository.save(task);
    }

    findAll() {
        const allTasks = this.taskRepository.find({});
        return allTasks;
    }

    async findOne(id: string) {
        const taskId = await this.taskRepository.findOne(id);
        if (!taskId) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return taskId;
    }

    async update(id: string, updateTaskDto: UpdateTaskDto) {
        await this.taskRepository.update(id, updateTaskDto);
        return updateTaskDto;

    }

    async remove(id: string) {
        const deletedTask = this.taskRepository.findOne(id);
        await this.taskRepository.delete(id);
        return deletedTask;
    }
}
