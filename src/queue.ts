interface QueueEntity<InputType, OutputType> {
  value: InputType;
  done: (out: OutputType) => any;
  err: (err: Error | string) => any;
}

export class Queue<InputType, OutputType> {
  private _queue: Array<QueueEntity<InputType, OutputType>>;
  constructor() {
    this._queue = [];
  }
  queue(value: InputType): Promise<OutputType> {
    return new Promise((resolve, reject) => {
      this._queue.push({
        value: value,
        done: (out: OutputType) => resolve(out),
        err: (err: Error | string) => reject(err),
      });
    });
  }
  next(): QueueEntity<InputType, OutputType> | null {
    return this._queue.shift() ?? null;
  }
}
