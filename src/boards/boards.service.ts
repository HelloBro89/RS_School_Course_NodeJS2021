/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  async createBoard(createBoardDto: CreateBoardDto) {
    const boardsRepository = getRepository(Board);
    const newBoard = boardsRepository.create(createBoardDto);
    const addedBoard = await boardsRepository.save(newBoard);
    return addedBoard;
  }

  getAllBoards() {
    const boardsRepository = getRepository(Board);
    return boardsRepository.find({ where: {} });
  }


  async getBoardByID(id: string) {
    const boardsRepository = getRepository(Board);
    const foundUser = await boardsRepository.findOne(id);
    return foundUser;
  }

  updateBoard(id: string, updateBoardDto: UpdateBoardDto) {
    const boardsRepository = getRepository(Board);
    boardsRepository.update(id, updateBoardDto);
    return updateBoardDto;
  }

  deleteBoard(id: string) {
    // const tasksRepository = getRepository(Task);
    // const arrayOfTasks = await tasksRepository.find({ where: { boardId: id } });
    // if (arrayOfTasks.length > 0) {
    //   for (let i = 0; i < arrayOfTasks.length; i += 1) {
    //     const idTasks = arrayOfTasks[i]!.id;
    //     tasksRepository.delete(idTasks)
    //   }
    // }

    const boardsRepository = getRepository(Board);
    const res = boardsRepository.findOne(id);
    boardsRepository.delete(id);
    return res;
  }
}
