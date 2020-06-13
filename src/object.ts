export const patch = <T1 extends { [name: string]: any }, T2 extends { [name: string]: any }>(source: T1, destination: T2): T1 & T2 =>
  Object.assign(destination, source);

export const applyDefaults = <T extends Object>(source: T, destination: T): T => {
  for (let key in source) {
    if (!destination.hasOwnProperty(key)) destination[key] = source[key];
  }
  return destination;
};

export const stripExtraEntries = <T extends { [name: string]: any }>(whitelist: Array<string>, destination: T): T & T => {
  Object.keys(destination).forEach(key => {
    if (!whitelist.includes(key)) delete destination[key];
  });

  return destination;
};

export const hasEntries = (obj: Object, keys: Array<string>): boolean => keys.every(key => obj.hasOwnProperty(key));
