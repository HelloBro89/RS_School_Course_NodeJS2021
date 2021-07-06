import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';
import { AuthModule } from '../auth/auth.module';


@Module({
    imports: [AuthModule, TypeOrmModule.forFeature([Task])],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule { }
