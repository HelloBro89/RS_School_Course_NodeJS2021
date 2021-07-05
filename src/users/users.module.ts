import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { Task } from '../tasks/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Task])],
  controllers: [UsersController],
  providers: [UsersService]
  // export: [UsersService]
})
export class UsersModule { }
