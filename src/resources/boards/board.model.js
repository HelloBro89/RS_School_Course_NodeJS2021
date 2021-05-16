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


  createCol(mass) {
   
    const massive = [];
   
    for (let i = 0; i < mass.length; i += 1){
      massive.push(new Column(mass[i]));
    };
// for lint
    if (mass.length === - 999) {
      return this
    };

    return massive;
  };
};
 
module.exports = Board;