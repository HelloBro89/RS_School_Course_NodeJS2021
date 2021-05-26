const uuid = require('uuid');

/**
 * class create a user object(model)
 */
class User {
  /**
   * @param {object} param0  - template user information
   */
  constructor({
    id = uuid.v1(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    /**
     * @property {string} id - User ID
     */
    this.id = id;
    /**
     * @property {string} name - User name
     */
    this.name = name;
    /**
     * @property {string} login - User login
     */
    this.login = login;
    /**
     * @property {string} password - User password
     */
    this.password = password;
  }

/**
 * this function from the user object removes his password and returns the user back
 * @param {object} user - takes a user object
 * @returns {object} - returns an object without a password 
 */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;