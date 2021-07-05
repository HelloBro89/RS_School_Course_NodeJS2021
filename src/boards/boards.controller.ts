import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) { }

  @Post()
  async createBoard(@Body() createBoardDto: CreateBoardDto) {

    const board = await this.boardsService.createBoard(createBoardDto);
    return board;

    // return this.boardsService.createBoard(createBoardDto);
  }

  @Get()
  async getAllBoards() {

    const allBoards = await this.boardsService.getAllBoards();
    return allBoards;
    // return this.boardsService.getAllBoards();
  }


  @Get(':id')
  async getBoardByID(@Param('id') id: string) {
    const boardId = await this.boardsService.getBoardByID(id);
    return boardId;
    // return this.boardsService.getBoardByID(id);
  }

  @Put(':id')
  async updateBoard(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {

    const changedBoard = await this.boardsService.updateBoard(id, updateBoardDto);
    return changedBoard;

    // return this.boardsService.updateBoard(id, updateBoardDto);
  }


  @Delete(':id')
  async deleteBoard(@Param('id') id: string) {

    const deletedBoard = await this.boardsService.deleteBoard(id);
    return deletedBoard;

    // return this.boardsService.deleteBoard(id);
  }
}
