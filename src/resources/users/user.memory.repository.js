const { DBusers, DBtasks } = require("../db");

const getAllUsers = async () => DBusers;

const getUserByID = async id => DBusers.find(el => el.id === id);

const createUser = async user => {
  DBusers.push(user);
  return user;
};

const updateUser = async (id, body) => {
  const userIndex = DBusers.findIndex(el => el.id === id);

  DBusers[userIndex] = userIndex !== -1 ?  body : DBusers[userIndex];
  return DBusers[userIndex];
};

const deleteUser = async id => {
  const userIndex = DBusers.findIndex(el => el.id === id);
  for (let i = 0; i < DBtasks.length; i += 1) {
    
      if ( DBtasks[i].userId === id) {
        DBtasks[i].userId = null;
      }
};
  return DBusers.splice(userIndex, 1);
};

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser };
