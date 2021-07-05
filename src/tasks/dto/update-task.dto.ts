// import { PartialType } from '@nestjs/mapped-types';
// import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto {

    id!: string;

    title!: string;

    order!: number;

    description!: string;

    userId!: string | null;

    boardId!: string | null;

    columnId!: string | null;
};
