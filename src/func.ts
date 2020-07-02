import { object } from '.';

export const prepare = <A extends Array<any>, R>(fn: (...args: A) => R, ...args: A): (() => R) => (): R => fn(...args);

export const makeCallable = <T1 extends { [name: string]: any }, T2 extends Function>(obj: T1, fn: T2): T1 & T2 =>
  object.patch(obj, fn);
