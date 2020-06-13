type typeReturn =
  | 'number'
  | 'string'
  | 'boolean'
  | 'array'
  | 'null'
  | 'undefined'
  | 'function'
  | 'object'
  | 'symbol'
  | 'bigint'
  | 'error'
  | 'nan'
  | 'date'
  | 'map'
  | 'set';

export function type(value: unknown): typeReturn {
  let a = typeof value;
  a;
  if (Array.isArray(value) || value instanceof Array) return 'array';
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (value instanceof Date) return 'date';
  if (value instanceof Error) return 'error';
  if (value instanceof Map) return 'map';
  if (value instanceof Set) return 'set';
  if (value instanceof Function) return 'function';
  if (value !== value) return 'nan';
  return typeof value;
}

export const isType = (value: any, shouldBe: typeReturn): boolean => type(value) === shouldBe;
