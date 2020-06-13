function* byteGenerator(seed: number) {
  while (true) {
    var t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    if (yield (t ^ (t >>> 14)) >>> 0) return;
  }
}

export const toNumberArray = (data: string): Array<number> => data.split('').map(char => char.charCodeAt(0));

export const fromNumberArray = (data: Array<number>): string => data.map(num => String.fromCharCode(num)).join('');

export const symmetric = (data: Array<number>, seed: number): Array<number> => {
  let output: Array<number> = [];
  let bytegen = byteGenerator(seed);

  for (let value of data) {
    output.push(value ^ (<number>bytegen.next().value));
  }

  bytegen.next(true);

  return output;
};
