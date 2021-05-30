import { DBusers, DBtasks } from '../db';

const getAllUsers = async () => DBusers;

const getUserByID = async (id: string) => DBusers.find((el) => el.id === id);

const createUser = async (user: {
  id: string;
  name: string;
  login: string;
  password: string;
}) => {
  DBusers.push(user);
  return user;
};

const updateUser = async (
  id: string,
  body: { id: string; name: string; login: string; password: string }
) => {
  const userIndex = DBusers.findIndex((el) => el.id === id);

  if (userIndex !== -1) {
    DBusers[userIndex] = body;
  }

  return DBusers[userIndex];
};

const deleteUser = async (id: string) => {
  const userIndex = DBusers.findIndex((el) => el.id === id);

  for (let i = 0; i < DBtasks.length; i += 1) {
    const taskIndex = DBtasks.findIndex((el) => el.userId === id);
    if (taskIndex !== -1) {
      DBtasks[taskIndex] = { ...DBtasks[taskIndex], userId: null };
    }
  }

  const deletedObj: { id?: string | undefined; name?: string | undefined; login?: string | undefined; password?: string | undefined; } = { ...DBusers[userIndex] };

  DBusers.splice(userIndex, 1);

  return deletedObj;
};

export const usersRepo = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
