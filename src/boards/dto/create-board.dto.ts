import { Column as BoardCol } from '../board.column-model';

export class CreateBoardDto {

    id!: string;

    title!: string;

    column!: BoardCol[];
}
