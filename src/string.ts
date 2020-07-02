type Costs = {
  insert: number;
  substitute: number;
  delete: number;
};

export const levenshtein = (
  source: string,
  compare: string,
  costs: Costs = {
    insert: 1,
    substitute: 1,
    delete: 1,
  }
): number => {
  if (source === compare) return 0;
  if (!source.length) return compare.length;
  if (!compare.length) return source.length;

  let temp: Array<Array<number>> = Array();

  for (let x: number = 0; x <= compare.length; x++) temp[x] = [x];

  for (let y: number = 0; y <= source.length; y++) temp[0][y] = y;

  for (let x: number = 1; x <= compare.length; x++)
    for (let y: number = 1; y <= source.length; y++)
      if (compare[x - 1] == source[y - 1]) temp[x][y] = temp[x - 1][y - 1];
      else
        temp[x][y] = Math.min(
          temp[x - 1][y - 1] + costs.substitute,
          Math.min(temp[x][y - 1] + costs.insert, temp[x - 1][y] + costs.delete)
        );

  return temp[compare.length][source.length];
};

export const distance = (
  source: string,
  compare: string,
  costs: Costs = {
    insert: 1,
    substitute: 1,
    delete: 1,
  }
): { inserts: number; substitutions: number; deletes: number; full: number } => {
  if (source === compare)
    return {
      inserts: 0,
      substitutions: 0,
      deletes: 0,
      full: 0,
    };
  if (!source.length)
    return {
      inserts: compare.length,
      substitutions: 0,
      deletes: 0,
      full: compare.length * costs.insert,
    };
  if (!compare.length)
    return {
      inserts: 0,
      substitutions: 0,
      deletes: source.length,
      full: source.length * costs.delete,
    };

  let res = {
    inserts: 0,
    substitutions: 0,
    deletes: 0,
    full: 0,
  };

  for (let i = 0; i < Math.max(source.length, compare.length); i++)
    if (!source.charAt(i)) res.inserts += 1;
    else if (!compare.charAt(i)) res.deletes += 1;
    else if (compare.charAt(i) !== source.charAt(i)) res.substitutions += 1;

  res.full = res.inserts * costs.insert + res.substitutions * costs.substitute + res.deletes * costs.delete;
  return res;
};

export const closest = (
  source: string,
  compare: Array<string>,
  costs: Costs = {
    insert: 1,
    substitute: 1,
    delete: 1,
  }
): { index: number; value: string } => {
  let mapped = compare.map(s => distance(source, s, costs).full);
  let index = mapped.indexOf(Math.min(...mapped));
  return { index: index, value: compare[index] };
};
