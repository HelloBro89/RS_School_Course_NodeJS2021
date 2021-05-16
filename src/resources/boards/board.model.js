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
    this.columns = this.createCol(columns);
  }

  // eslint-disable-next-line class-methods-use-this
  createCol(mass) {
   
    const massive = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < mass.length; i++){
      massive.push(new Column(mass[i]));
    };
    return massive;
  };
};
 
module.exports = Board;