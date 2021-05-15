const { DBboards } = require('../db');

const getAllBoards = async () => DBboards;

const getBoardByID = async id => {
  const neededBoard = DBboards.find(el => el.id === id);
  return neededBoard;
};

const createBoard = async board => {
  DBboards.push(board);
    return board;
};

const updateBoard = async (id, body) => {
   const boardIndex = DBboards.findIndex(el => el.id === id);
   DBboards[boardIndex] = boardIndex !== -1 ? body : DBboards[boardIndex];
   return DBboards[boardIndex];
};

const deleteBoard = async id => {
    const boardIndex = DBboards.findIndex(el => el.id === id);
    const board = DBboards[boardIndex];
    DBboards.splice(boardIndex, 1);

   return board;
}

module.exports = { getAllBoards, getBoardByID, createBoard, updateBoard, deleteBoard};