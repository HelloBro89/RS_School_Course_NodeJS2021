import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { Task } from '../tasks/task.entity';
import { BoardsController } from './boards.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Board]), TypeOrmModule.forFeature([Task])],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule { }
