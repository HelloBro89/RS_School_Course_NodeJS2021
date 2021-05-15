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
   
    // const column = [];
    // if (mass.length > 0) {
    //     for (const sort of mass) {
    //         column.push(new Column(sort));
    //     }
    // } else {
    //   return this;
    // }
    // return column;

  const massive = [];
  for (let i = 0; i < mass.length; i += 1){
    massive.push(new Column(mass[i]));
    };
    if (mass.length === -5){
      return this;
    }
    return massive;
  };
};

module.exports = Board;