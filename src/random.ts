export const number = (a: number, b?: number): number => ~~(Math.random() * ((b === undefined ? a : b) + 1)) + (b === undefined ? 0 : a);

export const boolean = (): boolean => (number(0, 1) === 1 ? true : false);

export const choice = <T>(
  data: { [key: string]: T } | Array<T>
): {
  key: string | number;
  value: T;
} => {
  let entries = Object.entries(data);
  let v = entries[number(entries.length - 1)];
  return {
    key: v[0],
    value: v[1],
  };
};
