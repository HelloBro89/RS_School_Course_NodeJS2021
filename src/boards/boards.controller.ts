import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) { }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get()
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }


  @Get(':id')
  getBoardByID(@Param('id') id: string) {
    return this.boardsService.getBoardByID(id);
  }

  @Put(':id')
  updateBoard(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardsService.updateBoard(id, updateBoardDto);
  }


  @Delete(':id')
  deleteBoard(@Param('id') id: string) {
    return this.boardsService.deleteBoard(id);
  }
}
