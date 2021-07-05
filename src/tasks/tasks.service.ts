import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private repository: Repository<Task>) { }

    create(createTaskDto: CreateTaskDto) {
        const task = this.repository.create(createTaskDto);
        return this.repository.save(task);
    }

    findAll() {
        const allTasks = this.repository.find({});
        return allTasks;
    }

    findOne(id: string) {
        const taskId = this.repository.findOne(id);
        return taskId;
    }

    async update(id: string, updateTaskDto: UpdateTaskDto) {
        await this.repository.update(id, updateTaskDto);
        return updateTaskDto;

    }

    async remove(id: string) {
        const deletedTask = this.repository.findOne(id);
        await this.repository.delete(id);
        return deletedTask;
    }
}
