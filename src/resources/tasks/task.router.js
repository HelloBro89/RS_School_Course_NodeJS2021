const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get( async (req, res) =>{
    const tasks = await tasksService.allTasks();
    res.status(200).json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
    
    const id = req.params.taskId;
    const taskdID = await tasksService.taskByID(id);
 
    if (taskdID === undefined){
        res.status(404).json()
       } else {
        res.status(200).json(taskdID)
       };
});

router.route('/').post( async (req, res) =>{

    req.body.boardId = req.params.boardId;
    const addedTask = await tasksService.createdTask(new Task( req.body ));
    res.status(201).json(addedTask);
});

router.route('/:taskId').put(async (req, res) => {

    const id = req.params.taskId;
    const {body} = req;
    const changedTask = await tasksService.updatedTask(id, body);
  
    res.status(200).json(changedTask);
});

router.route('/:taskId').delete(async (req, res) => {

    const id = req.params.taskId;
    const deletedTask = await tasksService.deletedTask(id);
 
    res.status(200).json(deletedTask);
});

module.exports = router;
