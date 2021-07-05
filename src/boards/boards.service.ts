import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './board.entity';
import { Task } from '../tasks/task.entity';

@Injectable()
export class BoardsService {

  constructor(@InjectRepository(Board) private boardRepository: Repository<Board>,
    @InjectRepository(Task) private taskRepository: Repository<Task>) { };

  async createBoard(createBoardDto: CreateBoardDto) {
    const board = this.boardRepository.create(createBoardDto);
    return this.boardRepository.save(board);
  }

  getAllBoards() {
    const allBoards = this.boardRepository.find({ where: {} });
    return allBoards;
  }

  async getBoardByID(id: string) {
    const boardId = await this.boardRepository.findOne(id);
    if (!boardId) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return boardId;
  }

  async updateBoard(id: string, updateBoardDto: UpdateBoardDto) {
    await this.boardRepository.update(id, updateBoardDto);
    return updateBoardDto;
  }

  async deleteBoard(id: string) {
    const arrayOfTasks = await this.taskRepository.find({ where: { boardId: id } });
    if (arrayOfTasks.length > 0) {
      for (let i = 0; i < arrayOfTasks.length; i += 1) {
        const idTasks = arrayOfTasks[i]!.id;
        this.taskRepository.delete(idTasks);
      }
    }

    const deletedBoard = this.boardRepository.findOne(id);
    await this.boardRepository.delete(id);
    return deletedBoard;
  }
}
