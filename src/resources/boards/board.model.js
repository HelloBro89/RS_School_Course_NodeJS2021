const uuid = require('uuid');

class Board {
  constructor({
    id = uuid.v1(),
    title = 'BOARD_TITLE',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
};
 
module.exports = Board;