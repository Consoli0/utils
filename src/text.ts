import { flow, characters, random } from '.';
import { isType } from './types';

export const spacify = (
  text: string,
  count?: number | ((match: string, index: number) => number),
  incremental: boolean = false
): string => {
  if (count === undefined || count === null) count = 1;
  let index = 0;
  return text.replace(/./g, match => {
    index++;

    let v: number = 0;
    if (isType(v, 'function')) v = (<Function>count)(match, index);
    else if (isType(v, 'number')) v = <number>count;

    if (index === 1) return match;
    return ' '.repeat(incremental ? index * v : v) + match;
  });
};

export const hillify = (
  text: string,
  options: { beginning: boolean; end: boolean } = { beginning: true, end: true }
): string => {
  let arr = text.split('');
  let res: Array<Array<string>> = [arr];
  arr.forEach((_, len) => {
    let t = text.substr(0, arr.length - (len + 1)).split('');
    if (options.beginning) res.unshift(t);
    if (options.end) res.push(t);
  });
  return res.map(line => line.join('')).join('\n');
};

type CHARACTER_TYPE =
  | 'ITALIC_SERIF'
  | 'ITALIC_SANS'
  | 'BOLD_SERIF'
  | 'BOLD_SANS'
  | 'ITALIC_BOLD_SERIF'
  | 'ITALIC_BOLD_SANS'
  | 'DOUBLE_STRUCK'
  | 'CURSIVE'
  | 'BOLD_CURSIVE'
  | 'FULL_WIDTH'
  | 'SMALL'
  | 'BOX'
  | 'BUBBLE'
  | 'INVERTED_BOX'
  | 'MIDEVAL'
  | 'BOLD_MIDEVAL'
  | 'MONOSPACE';

export const unicode = (text: string, type: CHARACTER_TYPE | characters.CHARACTER_REPLACEMENTS_ID): string =>
  text
    .split('')
    .map((c: string) => {
      if (!(c in characters.characterReplacements)) return c;
      return (<Array<string>>characters.characterReplacements[c])[
        isType(type, 'number') ? <number>type : characters.CHARACTER_REPLACEMENTS_ID[<CHARACTER_TYPE>type]
      ];
    })
    .join('');

export const curse = async (text: string): Promise<string> =>
  flow.pipe(
    text,
    (text: string): string => spacify(text, () => random.number(1, 3)),
    (text: string): string =>
      text
        .split('')
        .map(c => (random.boolean() ? c.toUpperCase() : c.toLowerCase()))
        .join(''),
    (text: string): string =>
      text
        .split('')
        .map(c => unicode(c, random.number(0, characters.characterReplacements.len - 1)))
        .join('')
  );
