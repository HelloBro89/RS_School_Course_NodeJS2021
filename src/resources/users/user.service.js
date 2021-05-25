const usersRepo = require('./user.memory.repository');

/**
 * returns the result of executing a nested function "getAllUsers" 
 * @returns {Array} - returns an array of all Users
 */
const getAllUsers = () => usersRepo.getAllUsers();

const getUserByID = id => usersRepo.getUserByID(id);

const createUser =  user => usersRepo.createUser(user);

const updateUser = (id, body) => usersRepo.updateUser(id, body);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser };
