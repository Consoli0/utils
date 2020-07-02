export const assert: (value: any, message?: string | Error) => asserts value = (
  value: any,
  message?: string | Error
): asserts value => {
  if (!value) throw message ? message : new TypeError(`Expected truthy value, instead got ${value}.`);
  else return;
};

export const assure = <A>(value: any): A => <A>(<unknown>value);
