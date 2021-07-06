import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/boards/:boardId/tasks')
@UseGuards(AuthGuard)
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    async createBoard(@Param('boardId') boardId: string, @Body() createTaskDto: CreateTaskDto) {

        const newCreateTaskDto = { ...createTaskDto, boardId };
        const task = await this.tasksService.createBoard(newCreateTaskDto);
        return task;
    }

    @Get()
    async findAll() {
        const allTasks = await this.tasksService.findAll();
        return allTasks;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const taskId = await this.tasksService.findOne(id);
        return taskId;
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        const updatedTask = await this.tasksService.update(id, updateTaskDto);
        return updatedTask;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const deletedTask = await this.tasksService.remove(id);
        return deletedTask;
    }
}
