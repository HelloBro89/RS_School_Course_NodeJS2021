const uuid = require('uuid');
const Column = require('./board.column.model');

class Board {
  constructor({
    id = uuid.v1(),
    title = 'BOARD_TITLE',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new Column(col));
  }
};
 
module.exports = Board;