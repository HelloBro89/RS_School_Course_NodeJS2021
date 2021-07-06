import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('boards')
@UseGuards(AuthGuard)
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) { }

  @Post()
  async createBoard(@Body() createBoardDto: CreateBoardDto) {
    const board = await this.boardsService.createBoard(createBoardDto);
    return board;
  }

  @Get()
  async getAllBoards() {
    const allBoards = await this.boardsService.getAllBoards();
    return allBoards;
  }

  @Get(':id')
  async getBoardByID(@Param('id') id: string) {
    const boardId = await this.boardsService.getBoardByID(id);
    return boardId;
  }

  @Put(':id')
  async updateBoard(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    const changedBoard = await this.boardsService.updateBoard(id, updateBoardDto);
    return changedBoard;
  }

  @Delete(':id')
  async deleteBoard(@Param('id') id: string) {
    const deletedBoard = await this.boardsService.deleteBoard(id);
    return deletedBoard;
  }
}
