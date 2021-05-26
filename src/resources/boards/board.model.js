const uuid = require('uuid');
const Column = require('./board.column.model');

/**
 * class create a board object(model)
 */
class Board {
  /**
   * @param {object} param0 - template board information
   */
  constructor({
    id = uuid.v1(),
    title = 'BOARD_TITLE',
    columns = []
  } = {}) {
    /**
     * @property {string} id - Board ID
     */
    this.id = id;
    /**
     * @property {string} title - Board title
     */
    this.title = title;
    /**
     * @property {Array} title - Board columns
     */
    this.columns = columns.map((col) => new Column(col));
  }
};
 
module.exports = Board;