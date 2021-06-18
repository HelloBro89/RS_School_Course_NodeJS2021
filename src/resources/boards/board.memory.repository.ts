import { getRepository/* , getConnectionManager */ } from 'typeorm';
// import { DBtasks } from '../db';
import { Board } from '../../entities/board';

const getAllBoards = async () => {
  const boardsRepository = getRepository(Board);
  return boardsRepository.find({ where: {} });
};

const getBoardByID = async (id: string) => {
  const boardsRepository = getRepository(Board);
  return boardsRepository.findOne(id);
  // const neededBoard = DBboards.find((el) => el.id === id);
  // return neededBoard;
};

const createBoard = async (board: {
  id: string;
  title: string;
  columns: {}[];
}) => {

  const boardsRepository = getRepository(Board);
  const newBoard = boardsRepository.create(board);
  const addedBoard = boardsRepository.save(newBoard);
  return addedBoard;
  // DBboards.push(board);
  // return board;
};

const updateBoard = async (
  id: string,
  body: { id: string; title: string; columns: {}[] }
) => {
  const boardsRepository = getRepository(Board);
  boardsRepository.update(id, body);
  return body;
  // const userInd

  // const boardIndex = DBboards.findIndex((el) => el.id === id);
  // if (boardIndex !== -1) {
  //   DBboards[boardIndex] = body;
  // }

  // // DBboards[boardIndex] = boardIndex !== -1 ? body : DBboards[boardIndex];
  // return DBboards[boardIndex];
};

const deleteBoard = async (id: string) => {

  const boardsRepository = getRepository(Board);
  const res = await boardsRepository.delete(id);
  // if (res === undefined) return 'Not found';
  return res.raw;
  // const boardIndex = DBboards.findIndex((el) => el.id === id);
  // const board = DBboards[boardIndex];
  // DBboards.splice(boardIndex, 1);

  // eslint-disable-next-line no-constant-condition
  // while (true) {
  //   const taskIndex = DBtasks.findIndex((el) => el.boardId === id);
  //   if (taskIndex === -1) break;
  //   DBtasks.splice(taskIndex, 1);
  // }
  // return board;
};

export const boardRepo = {
  getAllBoards,
  getBoardByID,
  createBoard,
  updateBoard,
  deleteBoard,
};
