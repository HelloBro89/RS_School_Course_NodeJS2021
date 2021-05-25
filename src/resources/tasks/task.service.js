const taskdRepo = require('./task.memory.repository');

/**
 * mediator function, calls the nested function and returns the result of its execution,
 * used for business logic
 * @returns {array} - returns an array of all Tasks
 */
const allTasks = () => taskdRepo.getAllTasks();

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - ID of the task you want to find
 * @returns {object} - returns the found task by ID
 */
const taskByID = id => taskdRepo.getTaskByID(id);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {object} board - takes an object(Task) with properties
 * @returns {object} - returns the object(task) passed to the parameter
 */
const createdTask = task => taskdRepo.createTask(task);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - a first term, used to search for a task by ID
 * @param {object} body  - a second term, contains data about task change
 * @returns {object} - returns(body) the changed task
 */
const updatedTask = (id, body) => taskdRepo.updateTask(id, body);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - used to remove the task by ID
 * @returns {object} - returns the deleted task
 */
const deletedTask = id => taskdRepo.deleteTask(id);

module.exports = { allTasks, taskByID, createdTask, updatedTask, deletedTask };