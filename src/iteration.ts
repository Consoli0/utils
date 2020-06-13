export const forEach = <T>(array: Array<T>, callback: (value: T, done?: () => void) => void): Promise<void> =>
  new Promise((resolve) => {
    var index = 0;
    const next = () => {
      if (index >= array.length) return resolve();
      callback(array[index], next);
      index++;
    };
    next();
  });

export const iForEach = <T>(iter: Generator<T> | Iterator<T> | IterableIterator<T>, callback: (value: T) => Promise<void> | void): Promise<void> =>
  new Promise(async (resolve) => {
    const next = async () => {
      let v = iter.next();
      await callback(v.value);
      if (!v.done) next();
      else resolve();
    };
    next();
  });

export const aForEach = <T>(array: Array<T>, callback: (value: T) => Promise<void> | void): Promise<void> =>
  new Promise(async (resolve) => {
    var index = 0;
    const next = async () => {
      if (index >= array.length) return resolve();
      await callback(array[index]);
      index++;
      next();
    };
    next();
  });

export const repeat = (count: number, fn: (index: number) => void | false | Promise<void | false>): Promise<void> =>
  new Promise(async res => {
    for (let i = 0; i < count; i++) {
      await fn(i);
    }
    res();
  });
