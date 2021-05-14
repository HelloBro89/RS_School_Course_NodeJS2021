const DB = require("./user_dataBase");

const getAllUsers = async () => DB;

const getUserByID = async id => DB.find(el => el.id === id);

const createUser = async user => {
  DB.push(user);
  return user;
};

const updateUser = async (id, body) => {
  const userIndex = DB.findIndex(el => el.id === id);

  DB[userIndex] = userIndex !== -1 ?  body : DB[userIndex];
  return DB[userIndex];
};

const deleteUser = async id => {
  const userIndex = DB.findIndex(el => el.id === id);
  return DB.splice(userIndex, 1);
}

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser };
