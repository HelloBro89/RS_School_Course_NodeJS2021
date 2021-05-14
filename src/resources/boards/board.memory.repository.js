const DB = require('./board_dataBase');

const getAllBoards = async () => DB;

const getBoardByID = async id => {
  const test = DB.find(el => el.id === id);
  return test;
};

const createBoard = async board => {
    DB.push(board);
    return board;
};

const updateBoard = async (id, body) => {
   const boardIndex = DB.findIndex(el => el.id === id);
   DB[boardIndex] = boardIndex !== -1 ? body : DB[boardIndex];
   return DB[boardIndex];
};

const deleteBoard = async id => {
    const boardIndex = DB.findIndex(el => el.id === id);
    const board = DB[boardIndex];
    DB.splice(boardIndex, 1);

   return board;
}

module.exports = { getAllBoards, getBoardByID, createBoard, updateBoard, deleteBoard};