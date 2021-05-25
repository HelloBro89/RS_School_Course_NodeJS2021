const { DBtasks } = require('../db');

/**
 * function returns all tasks saved in DBtasks
 * @returns {Array} - returns an array of all Tasks
 */
const getAllTasks = async () => DBtasks;

/**
 * function searches for a task by ID and returns it
 * @param {string} id - ID of the task you want to find
 * @returns {object} - returns the found task by ID
 */
const getTaskByID = async id => {
    const neededTask = DBtasks.find(el => el.id === id);
    return neededTask;
};

/**
 * creates the task to the DB and returns it
 * @param {object} task - takes an object with properties
 * @returns {object} - returns the object(task) passed to the parameter 
 */
const createTask = async (task) => {
    DBtasks.push(task);
    return task;
};

/**
 * function searches for a task by ID and changes it
 * @param {string} id - a first term, searches task by this parameter
 * @param {Object} body - a second term, changes the task to the properties of this parameter 
 * @returns {Object} - returns(body) the changed task
 */
const updateTask = async (id, body) => {
    const taskIndex = DBtasks.findIndex(el => el.id === id);
    DBtasks[taskIndex] = taskIndex !== -1 ? body : DBtasks[taskIndex];
    return DBtasks[taskIndex];
};

/**
 * function searches the board by ID and removes him, and its tasks
 * @param {string} id - searches board by this parameter
 * @returns {Object} - returns the deleted board
 */
const deleteTask = async id => {
    const taskIndex = DBtasks.findIndex(el => el.id === id);
    const task = DBtasks[taskIndex];
    DBtasks.splice(taskIndex, 1);
    return task;
}

module.exports = { getAllTasks, getTaskByID, createTask, updateTask, deleteTask };