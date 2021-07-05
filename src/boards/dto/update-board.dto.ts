// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBoardDto } from './create-board.dto';
import { Column as BoardCol } from '../board.column-model';

export class UpdateBoardDto {

    id!: string;

    title!: string;

    column!: BoardCol[];


}


// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBoardDto } from './create-board.dto';
// import { Column as BoardCol } from '../board.column-model';

// export class UpdateBoardDto extends PartialType(CreateBoardDto) {

//     id!: string;

//     title!: string;

//     column!: BoardCol[];


// }

