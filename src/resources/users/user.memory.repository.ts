import { getRepository/* , getConnectionManager */ } from 'typeorm';
// import { DBtasks } from '../db';
import { User } from '../../entities/user';


const getAllUsers = async () => {
  // падает вот тут !!!
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
  // const res = usersRepository.findOne(id);
  usersRepository.update(id, body);
  return body;
  // const userIndex = User.findIndex((el) => el.id === id);

  // if (userIndex !== -1) {
  //   User[userIndex] = body;
  // }

  // return User[userIndex];
};

const deleteUser = async (id: string) => {
  const usersRepository = getRepository(User);
  const res = await usersRepository.delete(id);
  // if (res === undefined) return 'Not found';
  return res.raw;
  // const userIndex = User.findIndex((el) => el.id === id);

  // for (let i = 0; i < DBtasks.length; i += 1) {
  //   const taskIndex = DBtasks.findIndex((el) => el.userId === id);
  //   if (taskIndex !== -1) {
  //     DBtasks[taskIndex] = { ...DBtasks[taskIndex], userId: null };
  //   }
  // }

  // const deletedObj: { id?: string | undefined; name?: string | undefined; login?: string | undefined; password?: string | undefined; } = { ...User[userIndex] };

  // User.splice(userIndex, 1);

  // return deletedObj;
};

export const usersRepo = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
