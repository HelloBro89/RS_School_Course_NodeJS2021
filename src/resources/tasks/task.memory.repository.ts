import { DBtasks } from '../db';

type Task = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: null;
  boardId: null;
  columnId: null;
};

const getAllTasks = async () => DBtasks;

const getTaskByID = async (id: string) => {
  const neededTask = DBtasks.find((el) => el.id === id);
  return neededTask;
};

const createTask = async (task: Task) => {
  DBtasks.push(task);
  return task;
};

const updateTask = async (id: string, body: Task) => {
  const taskIndex = DBtasks.findIndex((el) => el.id === id);
  if (taskIndex !== -1) {
    DBtasks[taskIndex] = body;
  }
  // DBtasks[taskIndex] = taskIndex !== -1 ? body : DBtasks[taskIndex];
  return DBtasks[taskIndex];
};

const deleteTask = async (id: string) => {
  const taskIndex = DBtasks.findIndex((el) => el.id === id);
  const task = DBtasks[taskIndex];
  DBtasks.splice(taskIndex, 1);
  return task;
};

export const taskdRepo = {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTask,
  deleteTask,
};
