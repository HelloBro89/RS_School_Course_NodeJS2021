const taskdRepo = require('./task.memory.repository');

const getAllTasks = () => taskdRepo.getAllTasks();

const getTaskByID = id => taskdRepo.getTaskByID(id);

const createTask = task => taskdRepo.createTask(task);

const updateTask = (id, body) => taskdRepo.updateTask(id, body);

const deleteTask = id => taskdRepo.deleteTask(id);

module.exports = { getAllTasks, getTaskByID, createTask, updateTask, deleteTask };