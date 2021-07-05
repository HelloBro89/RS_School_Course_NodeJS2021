import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {

  constructor(@InjectRepository(Board) private repository: Repository<Board>) { };

  async createBoard(createBoardDto: CreateBoardDto) {
    const board = this.repository.create(createBoardDto);
    return this.repository.save(board);

    // const boardsRepository = getRepository(Board);
    // const newBoard = boardsRepository.create(createBoardDto);
    // const addedBoard = await boardsRepository.save(newBoard);
    // return addedBoard;
  }

  getAllBoards() {

    const allBoards = this.repository.find({ where: {} });
    return allBoards;

    // const boardsRepository = getRepository(Board);
    // return boardsRepository.find({ where: {} });
  }


  async getBoardByID(id: string) {

    const boardId = await this.repository.findOne(id);
    return boardId;

    // const boardsRepository = getRepository(Board);
    // const foundUser = await boardsRepository.findOne(id);
    // return foundUser;
  }

  async updateBoard(id: string, updateBoardDto: UpdateBoardDto) {

    await this.repository.update(id, updateBoardDto);
    return updateBoardDto;

    // const boardsRepository = getRepository(Board);
    // boardsRepository.update(id, updateBoardDto);
    // return updateBoardDto;
  }

  async deleteBoard(id: string) {
    // const tasksRepository = getRepository(Task);
    // const arrayOfTasks = await tasksRepository.find({ where: { boardId: id } });
    // if (arrayOfTasks.length > 0) {
    //   for (let i = 0; i < arrayOfTasks.length; i += 1) {
    //     const idTasks = arrayOfTasks[i]!.id;
    //     tasksRepository.delete(idTasks)
    //   }
    // }
    const deletedBoard = this.repository.findOne(id);
    await this.repository.delete(id);
    return deletedBoard;


    // const boardsRepository = getRepository(Board);
    // const res = boardsRepository.findOne(id);
    // boardsRepository.delete(id);
    // return res;
  }
}
