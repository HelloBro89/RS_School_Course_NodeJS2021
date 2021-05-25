const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const taskRouter = require('../tasks/task.router');

router.use('/:boardId/tasks', taskRouter);

router.route('/').get(async (req, res) => {
    const boards = await boardsService.getAllBoards();
    res.status(200).json(boards);
});

router.route('/:boardId').get(async (req, res) => {
    const id = req.params.boardId;
    const boardID = await boardsService.getBoardByID(id);
    if (!boardID){
        res.status(404).json()
       } else {
        res.status(200).json(boardID)
       };
});

router.route('/').post(async (req, res) => {
    const addedBoard = await boardsService.createBoard(new Board(req.body));
    res.status(201).json(addedBoard);
});

router.route('/:boardId').put(async (req, res) => {
    const id = req.params.boardId;
    const {body} = req;
    const changedBoard = await boardsService.updateBoard(id, body);
    
    res.status(200).json(changedBoard);
});

router.route('/:boardId').delete(async (req, res) => {
    const id = req.params.boardId;
    const deletedBoard = await boardsService.deleteBoard(id);
    res.status(200).json(deletedBoard);
});

  module.exports = router;
