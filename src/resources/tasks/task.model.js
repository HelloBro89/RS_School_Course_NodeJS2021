const uuid = require('uuid');

/**
 * class create a task object(model)
 */
class Task {
  /**
   * @param {object} param0 - template task information
   */
  constructor({
    id = uuid.v1(),
    title = 'Autotest task',
    order = 0,
    description = 'Lorem ipsum',
    userId = null,
    boardId = null,
    columnId = null
  } = {}) {
    /**
     * @property {string} id - Task ID
     */
    this.id = id;
    /**
     * @property {string} title - Task order
     */
    this.title = title;
    /**
     * @property {number} order - Task order
     */
    this.order = order;
    /**
     * @property {string} description - Task description
     */
    this.description = description;
    /**
     * @property {string} userId - Task userId
     */
    this.userId = userId;
    /**
     * @property {string} boardId - Task boardId
     */
    this.boardId = boardId;
    /**
     * @property {string} columnId - Task columnId
     */
    this.columnId = columnId;
  }
}

module.exports = Task;