export const oneOf = <T>(value: T, arr: Array<T>): boolean => arr.includes(value);

export const hasAny = <T>(source: Array<T>, test: Array<T>): boolean => test.some(key => source.includes(key));

export const objecHasAny = (source: { [key: string]: any }, test: Array<string>): boolean => test.some(key => source.hasOwnProperty(key));
