const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const userID = id => usersRepo.userID(id);

const createUser =  user => usersRepo.createUser(user);

const changeUser = (id, body) => usersRepo.changeUser(id, body);

const deleteUser = id => usersRepo.deletedUser(id);

module.exports = { getAll, userID, createUser, changeUser, deleteUser };
