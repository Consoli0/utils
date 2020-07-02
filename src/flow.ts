import { iteration } from '.';

export const pipe = async <Type>(
  original: Type,
  ...functions: Array<(value: Type) => Type | Promise<Type>>
): Promise<Type> => {
  let value = original;

  await iteration.aForEach(functions, async fn => {
    value = await fn(value);
  });

  return value;
};

export const mirror = <T>(input: T): T => input;
