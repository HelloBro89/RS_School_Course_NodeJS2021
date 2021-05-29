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

  // DBusers[userIndex] = userIndex !== -1 ? body : DBusers[userIndex];

  return DBusers[userIndex];
};

const deleteUser = async (id: string) => {
  const userIndex = DBusers.findIndex((el) => el.id === id);
  // console.log('***************************');
  // console.log(DBtasks);
  // console.log('***************************');
  DBtasks.map((task) => {
    if (task.userId === id) {
      task.userId = null;
    }
    return task;
  });
  // console.log('________________________-');
  // console.log(DBtasks);
  // console.log('________________________-');
  // for (let i = 0; i < DBtasks.length; i += 1) {

  //   if (DBtasks[i].userId === id) {
  //     DBtasks[i].userId = null;
  //   }
  // };

  return DBusers.splice(userIndex, 1);
};

export const usersRepo = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
