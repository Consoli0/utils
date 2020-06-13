export class Board<T> {
  #board: Array<Array<T | null>>;
  #size: { x: number; y: number };

  constructor() {
    this.#board = [];
    this.#size = {
      x: NaN,
      y: NaN,
    };
  }

  init(x: number, y: number): this {
    this.#board = new Array(y).fill(null).map(() => new Array(x).fill(null));
    this.#size = { x, y };
    return this;
  }

  get(x: number, y: number): T | null {
    if (!this.valid(x, y)) return null;
    return this.#board[y - 1][x - 1];
  }

  set(x: number, y: number, piece: T): this {
    if (this.valid(x, y)) this.#board[y - 1][x - 1] = piece;
    return this;
  }

  occupied(x: number, y: number): boolean {
    return this.get(x, y) !== null;
  }

  valid(x: number, y: number): boolean {
    return x >= 1 && x <= this.#size.x && y >= 1 && y <= this.#size.y;
  }

  get board(): Array<Array<T | null>> {
    return this.#board;
  }

  get size(): { x: number; y: number } {
    return this.#size;
  }
}
