const usersRepo = require('./user.memory.repository');

/**
 * mediator function, calls the nested function and returns the result of its execution,
 * used for business logic
 * @returns {array} - returns an array of all Users
 */
const allUsers = () => usersRepo.getAllUsers();

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - ID of the user you want to find
 * @returns {object} - returns the found user by ID
 */
const userByID = id => usersRepo.getUserByID(id);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {object} user - takes an object with properties
 * @returns {object} - returns the object(user) passed to the parameter
 */
const createdUser =  user => usersRepo.createUser(user);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - a first term, used to search for a user by ID
 * @param {object} body  - a second term, contains data about user change
 * @returns {object} - returns(body) the changed user
 */
const updatedUser = (id, body) => usersRepo.updateUser(id, body);

/**
 * mediator function, passes parameters to a nested function and returns its result,
 * used for business logic
 * @param {string} id - used to remove the user and tasks on the ID user
 * @returns {Array} - returns an array from remote users
 */
const deletesUser = id => usersRepo.deleteUser(id);

module.exports = { allUsers, userByID, createdUser, updatedUser, deletesUser };
