const { DBtasks, DBboards } = require('../db');

const getAllTasks = async () => DBtasks;

const getTaskByID = async id => {
    const neededTask = DBtasks.find(el => el.id === id);
    return neededTask;
};

const createTask = async (task) => {
    DBtasks.push(task);
    return task;
};

const updateTask = async (id, body) => {
    const taskIndex = DBtasks.findIndex(el => el.id === id);
    DBtasks[taskIndex] = taskIndex !== -1 ? body : DBtasks[taskIndex];
   
    return DBtasks[taskIndex];
};

const deleteTask = async id => {
    const taskIndex = DBtasks.findIndex(el => el.id === id);
    const task = DBtasks[taskIndex];
    DBtasks.splice(taskIndex, 1);
    for (let i = 0; i < DBboards.length; i += 1) {
        while (true) {
            const ind = DBboards[i].columns.findIndex(el => el.id === id);
            if (ind === -1 ) break;
            DBboards[i].columns.splice(ind, 1);
        }
    };
    return task;
}

module.exports = { getAllTasks, getTaskByID, createTask, updateTask, deleteTask };