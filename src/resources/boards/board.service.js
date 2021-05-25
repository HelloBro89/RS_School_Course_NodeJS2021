const boardRepo = require('./board.memory.repository');

/**
 * mediator function, calls the nested function and returns the result of its execution,
 * used for business logic
 * @returns {array} - returns an array of all Boards
 */
const allBoards = () => boardRepo.getAllBoards();

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - ID of the board you want to find
 * @returns {object} - returns the found board by ID
 */
const boardByID = id => boardRepo.getBoardByID(id);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {object} board - takes an object(Board) with properties
 * @returns {object} - returns the object(board) passed to the parameter
 */
const createdBoard = board => boardRepo.createBoard(board);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - a first term, used to search for a board by ID
 * @param {object} body  - a second term, contains data about board change
 * @returns {object} - returns(body) the changed board
 */
const updatedBoard = (id, body) => boardRepo.updateBoard(id, body);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - used to remove the board and task on the ID board
 * @returns {object} - returns the deleted board
 */
const deletedBoard = id => boardRepo.deleteBoard(id);

module.exports = { allBoards, boardByID, createdBoard, updatedBoard, deletedBoard };