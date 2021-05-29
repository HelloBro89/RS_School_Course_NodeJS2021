import { v4 as uuid } from 'uuid';

import { Column } from './board.column.model';

class Board {
  id: string;

  title: string;

  columns: Column[];

  constructor({ id = uuid(), title = 'BOARD_TITLE', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new Column(col));
  }
}

export { Board };
