import { DBboards, DBtasks } from '../db';

const getAllBoards = async () => DBboards;

const getBoardByID = async (id: string) => {
  const neededBoard = DBboards.find((el) => el.id === id);
  return neededBoard;
};

const createBoard = async (board: {
  id: string;
  title: string;
  columns: {}[];
}) => {
  DBboards.push(board);
  return board;
};

const updateBoard = async (
  id: string,
  body: { id: string; title: string; columns: {}[] }
) => {
  const boardIndex = DBboards.findIndex((el) => el.id === id);
  if (boardIndex !== -1) {
    DBboards[boardIndex] = body;
  }

  // DBboards[boardIndex] = boardIndex !== -1 ? body : DBboards[boardIndex];
  return DBboards[boardIndex];
};

const deleteBoard = async (id: string) => {
  const boardIndex = DBboards.findIndex((el) => el.id === id);
  const board = DBboards[boardIndex];
  DBboards.splice(boardIndex, 1);

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const taskIndex = DBtasks.findIndex((el) => el.boardId === id);
    if (taskIndex === -1) break;
    DBtasks.splice(taskIndex, 1);
  }
  return board;
};

export const boardRepo = {
  getAllBoards,
  getBoardByID,
  createBoard,
  updateBoard,
  deleteBoard,
};
