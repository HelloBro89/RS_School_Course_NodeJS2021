const boardRepo = require('./board.memory.repository');

const getAllBoards = () => boardRepo.getAllBoards();

const getBoardByID = id => boardRepo.getBoardByID(id);

const createBoard = board => boardRepo.createBoard(board);

const updateBoard = (id, body) => boardRepo.updateBoard(id, body);

const deleteBoard = id => boardRepo.deleteBoard(id);

module.exports = { getAllBoards, getBoardByID, createBoard, updateBoard, deleteBoard };