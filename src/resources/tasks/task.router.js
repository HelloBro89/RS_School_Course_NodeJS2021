const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId/tasks').get( async (req, res) =>{

    const tasks = await tasksService.getAllTasks();
    res.status(200).json(tasks);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
    
    const id = req.params.taskId;
    const taskdID = await tasksService.getTaskByID(id);
 
    if (taskdID === undefined){
        res.status(404).json()
       } else {
        res.status(200).json(taskdID)
       };
});

router.route('/:boardId/tasks').post( async (req, res) =>{

    req.body.boardId = req.params.boardId;
    const addedTask = await tasksService.createTask(new Task( req.body ));
 
    res.status(201).json(addedTask);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {

    const id = req.params.taskId;
    const {body} = req;
    const changedTask = await tasksService.updateTask(id, body);
  
    res.status(200).json(changedTask);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {

    const id = req.params.taskId;
    const deletedTask = await tasksService.deleteTask(id);
 
    res.status(200).json(deletedTask);
});

module.exports = router;
