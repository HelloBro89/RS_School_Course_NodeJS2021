const { DBusers, DBtasks } = require("../db");
/**
 * function returns all users saved in DBusers
 * @returns {Array} - returns an array of all Users
 */
const getAllUsers = async () => DBusers;

/**
 * function searches for a user by ID and returns him
 * @param {string} id - ID of the user you want to find
 * @returns {object} - returns the found user by ID
 */
const getUserByID = async id => DBusers.find(el => el.id === id);

/**
 * creates the user to the DB and returns it
 * @param {object} user - takes an object with properties: id, name, login, password
 * @returns {object} - returns the object(user) passed to the parameter 
 */
const createUser = async user => {
  DBusers.push(user);
  return user;
};

/**
 * function searches for a user by ID and changes him
 * @param {string} id - a first term, searches user by this parametr
 * @param {Object} body - a second term, changes the user to the properties of this parameter 
 * @returns {Object} - returns(body) the changed user
 */
const updateUser = async (id, body) => {
  const userIndex = DBusers.findIndex(el => el.id === id);

  DBusers[userIndex] = userIndex !== -1 ?  body : DBusers[userIndex];
  return DBusers[userIndex];
};

/**
 * function searches the user by ID and removes him, and tasks, where that user is assignee 
 * @param {string} id - searches user by this parameter
 * @returns {Array} - returns an array from remote users
 */
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
