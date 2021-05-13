const DB = require("./user_dataBase");

const getAll = async () => DB;

const userID = async id => DB.filter(el => el.id === id)[0] ;

const createUser = async user => {
  DB.push(user);
  return userID(user.id);
};

const changeUser = async (id, body) => {
  const userIndex = DB.findIndex(el => el.id === id);

  DB[userIndex] = userIndex !== -1 ?  body : DB[userIndex];
  return DB[userIndex];
};

const deletedUser = async id => {
  const userIndex = DB.findIndex(el => el.id === id);
  return DB.splice(userIndex, 1);
}

module.exports = { getAll, userID, createUser, changeUser, deletedUser };
