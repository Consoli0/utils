type BitFieldResolvable = number | BitField | Array<number | BitField>;
type IndexResolvable = number | Array<number>;

export default class BitField {
  val: number = 0b0;

  has(index: number): boolean {
    return (this.val & index) === index;
  }

  flip(index: IndexResolvable): void {
    if (Array.isArray(index)) index.forEach((i: number) => this._flip(i));
    else this._flip(index);
  }

  set(index: IndexResolvable, value: boolean = true): this {
    if (Array.isArray(index)) index.forEach((i: number) => this._set(i, value));
    else this._set(index, value);
    return this;
  }

  on(index: IndexResolvable): this {
    this.set(index, true);
    return this;
  }

  off(index: IndexResolvable): this {
    this.set(index, false);
    return this;
  }

  clear(): this {
    this.val = 0b0;
    return this;
  }

  toArray(): Array<number> {
    let r: Array<number> = [];
    for (let i = 0; i < this.val.toString(2).length; i++) {
      if (this.has(1 << i)) r.push(1 << i);
    }
    return r;
  }

  toString(): string {
    return this.val.toString();
  }

  toBinaryString(): string {
    return this.val.toString(2);
  }

  valueOf(): string {
    return this.toString();
  }

  private _flip(index: number): void {
    let val = this.has(index);
    if (val === true) this.off(index);
    else if (val === false) this.on(index);
    else throw new Error('[BitField] this.has(index) Did not return a Boolean');
  }

  private _set(index: number, value: boolean): void {
    if (value === true) this.val |= index;
    else if (value === false) this.val ^= index;
    else throw new Error('[BitField] this._set(index, value) Value is not a Boolean');
  }

  static from(from: BitFieldResolvable): BitField {
    let r = new BitField();
    if (typeof from === 'number') r.val = from;
    else if (from instanceof BitField) r.val = from.val;
    else if (Array.isArray(from)) {
      let sum = 0;
      from.forEach((v: number | BitField) => {
        if (typeof v === 'number') sum |= v;
        else sum |= v.val;
      });
      r.val = sum;
    }
    return r;
  }
}
