import BitField from './bitfield';

export const escape = (text: string): string =>
  text.replace(/`|```|__|_|\*\*|\*|\\|\|\||~~/g, c =>
    c
      .split('')
      .map(v => `\\${v}`)
      .join('')
  );

export enum MarkdownType {
  ITALIC = 1 << 1,
  BOLD = 1 << 2,
  UNDERLINE = 1 << 3,
  STRIKETHROUGH = 1 << 4,
  SPOILER = 1 << 5,
  INLINECODE = 1 << 6,
  CODEBLOCK = 1 << 7,
}

export class Markdown {
  #value: BitField;
  #codeBlockType: string = '';

  constructor() {
    this.#value = new BitField();
  }

  italic(v: boolean = true): this {
    this.#value.set(MarkdownType.ITALIC, v);
    return this;
  }

  bold(v: boolean = true): this {
    this.#value.set(MarkdownType.BOLD, v);
    return this;
  }

  underline(v: boolean = true): this {
    this.#value.set(MarkdownType.UNDERLINE, v);
    return this;
  }

  strikethrough(v: boolean = true): this {
    this.#value.set(MarkdownType.STRIKETHROUGH, v);
    return this;
  }

  spoiler(v: boolean = true): this {
    this.#value.set(MarkdownType.SPOILER, v);
    return this;
  }

  inlinecode(v: boolean = true): this {
    this.#value.set(MarkdownType.INLINECODE, v);
    return this;
  }

  codeblock(type?: string, v: boolean = true): this {
    if (type) this.#codeBlockType = type;
    this.#value.set(MarkdownType.CODEBLOCK, v);
    return this;
  }

  reset(): this {
    this.#value.clear();
    return this;
  }

  apply(str: string): string {
    let value = escape(str);
    let add = (md: string, prepend: string = '', append: string = ''): string =>
      (value = `${md}${prepend}${value}${append}${md}`);
    let has = (v: number): boolean => this.#value.has(v);

    if (has(MarkdownType.INLINECODE)) add('`');
    if (has(MarkdownType.CODEBLOCK))
      add(
        '```',
        `${this.#codeBlockType || ''}
`,
        `
`
      );
    if (has(MarkdownType.SPOILER)) add('||');
    if (has(MarkdownType.STRIKETHROUGH)) add('~~');
    if (has(MarkdownType.ITALIC)) add('_');
    if (has(MarkdownType.BOLD)) add('**');
    if (has(MarkdownType.UNDERLINE)) add('__');

    this.reset();
    return value;
  }
}
