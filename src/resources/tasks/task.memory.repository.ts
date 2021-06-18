import { getRepository/* , getConnectionManager */ } from 'typeorm';
// import { DBtasks } from '../db';
import { Task } from '../../entities/tasks';

// import { DBtasks } from '../db';

type TaskType = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: null;
  boardId: null;
  columnId: null;
};

const getAllTasks = async () => {
  const tasksRepository = getRepository(Task);
  return tasksRepository.find({ where: {} });
};

const getTaskByID = async (id: string) => {

  const tasksRepository = getRepository(Task);
  return tasksRepository.findOne(id);
  // const neededTask = DBtasks.find((el) => el.id === id);
  // return neededTask;
};

const createTask = async (task: TaskType) => {
  const tasksRepository = getRepository(Task);
  const newTask = tasksRepository.create(task);
  const addedTask = tasksRepository.save(newTask);
  return addedTask;
  // DBtasks.push(task);
  // return task;
};

const updateTask = async (id: string, body: TaskType) => {
  const tasksRepository = getRepository(Task);
  tasksRepository.update(id, body);
  return body;


  // const taskIndex = DBtasks.findIndex((el) => el.id === id);
  // if (taskIndex !== -1) {
  //   DBtasks[taskIndex] = body;
  // }
  // return DBtasks[taskIndex];
};

const deleteTask = async (id: string) => {
  const usersRepository = getRepository(Task);
  const res = await usersRepository.delete(id);
  return res.raw;

  // const taskIndex = DBtasks.findIndex((el) => el.id === id);
  // const task = DBtasks[taskIndex];
  // DBtasks.splice(taskIndex, 1);
  // return task;
};

export const taskdRepo = {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTask,
  deleteTask,
};
