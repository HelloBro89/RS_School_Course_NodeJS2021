const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();

const getUserByID = id => usersRepo.getUserByID(id);

const createUser =  user => usersRepo.createUser(user);

const updateUser = (id, body) => usersRepo.updateUser(id, body);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser };
