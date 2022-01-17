import { getRepository } from 'typeorm';
import { User } from '../../entities/user';
import { Task } from '../../entities/tasks';


const getAllUsers = async () => {
  const usersRepository = getRepository(User);
  return usersRepository.find({ where: {} });
};

const getUserByID = async (id: string) => {
  const usersRepository = getRepository(User);
  return usersRepository.findOne(id);
};

const createUser = async (user: {
  id: string;
  name: string;
  login: string;
  password: string;
}) => {
  const usersRepository = getRepository(User);
  const newUser = usersRepository.create(user);
  const addedUser = usersRepository.save(newUser);
  return addedUser;
};

const updateUser = async (
  id: string,
  body: { id: string; name: string; login: string; password: string }
) => {
  const usersRepository = getRepository(User);
  usersRepository.update(id, body);
  return body;
  // return User[userIndex];
};

const deleteUser = async (id: string) => {
  const tasksRepository = getRepository(Task);
  const arrayOfTasks = await tasksRepository.find({ where: { userId: id } });
  if (arrayOfTasks.length > 0) {
    for (let i = 0; i < arrayOfTasks.length; i += 1) {
      const idTasks = arrayOfTasks[i]!.id;
      const newObj = { ...arrayOfTasks[i], userId: null };
      tasksRepository.update(idTasks, newObj)
    }
  }
  const usersRepository = getRepository(User);
  const res = await usersRepository.delete(id);
  return res.raw;
};

export const usersRepo = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};