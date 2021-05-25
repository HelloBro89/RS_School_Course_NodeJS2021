const { DBboards, DBtasks } = require('../db');

/**
 * function returns all boards saved in DBboards
 * @returns {Array} - returns an array of all Boards
 */
const getAllBoards = async () => DBboards;

/**
 * function searches for a board by ID and returns it
 * @param {string} id - ID of the user you want to find
 * @returns {object} - returns the found board by ID
 */
const getBoardByID = async id => {
  const neededBoard = DBboards.find(el => el.id === id);
  return neededBoard;
};

/**
 * creates the board to the DB and returns it
 * @param {object} board - takes an object with properties: id, title, columns
 * @returns {object} - returns the object(board) passed to the parameter 
 */
const createBoard = async board => {
  DBboards.push(board);
    return board;
};

/**
 * function searches for a board by ID and changes it
 * @param {string} id - a first term, searches board by this parametr
 * @param {Object} body - a second term, changes the board to the properties of this parameter 
 * @returns {Object} - returns(body) the changed board
 */
const updateBoard = async (id, body) => {
   const boardIndex = DBboards.findIndex(el => el.id === id);
   DBboards[boardIndex] = boardIndex !== -1 ? body : DBboards[boardIndex];
   return DBboards[boardIndex];
};

/**
 * function searches the board by ID and removes him, and its tasks
 * @param {string} id - searches board by this parameter
 * @returns {Object} - returns the deleted board
 */
const deleteBoard = async id => {
    const boardIndex = DBboards.findIndex(el => el.id === id);
    const board = DBboards[boardIndex];
    DBboards.splice(boardIndex, 1);

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const taskIndex = DBtasks.findIndex(el => el.boardId === id);
    if (taskIndex === -1) break;
    DBtasks.splice(taskIndex, 1);
  };
   return board;
};

module.exports = { getAllBoards, getBoardByID, createBoard, updateBoard, deleteBoard};