import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/boards/:boardId/tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    async createBoard(@Param('boardId') boardId: string, @Body() createTaskDto: CreateTaskDto) {

        const newCreateTaskDto = { ...createTaskDto, boardId };
        const task = await this.tasksService.createBoard(newCreateTaskDto);
        return task;

        // return this.tasksService.create(createTaskDto);
    }

    @Get()
    async findAll() {
        const allTasks = await this.tasksService.findAll();
        return allTasks;
        // return this.tasksService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const taskId = await this.tasksService.findOne(id);
        return taskId;

        // return this.tasksService.findOne(+id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        const updatedTask = await this.tasksService.update(id, updateTaskDto);
        return updatedTask;


        // return this.tasksService.update(+id, updateTaskDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const deletedTask = await this.tasksService.remove(id);
        return deletedTask;
        // return this.tasksService.remove(+id);
    }
}
