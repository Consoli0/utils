type OBJECT_RESOLVER = {
  [key: string]: string;
  default: string;
};

type FUNCTION_RESOLVER = (key: string) => string;

export class Templater {
  private reference: OBJECT_RESOLVER | FUNCTION_RESOLVER;
  private regex!: RegExp;

  constructor() {
    this.reference = t => t;
    this.tag('{', '}');
  }

  set(reference: OBJECT_RESOLVER | FUNCTION_RESOLVER): this {
    this.reference = reference;
    return this;
  }

  tag(beginning: string, end: string): this {
    if (beginning !== end)
      this.regex = new RegExp(
        `(?:(?<!\\)|(?<=\\\\))${beginning.replace(/./g, m => `\\${m}`)}(.*?)${end.replace(/./g, m => `\\${m}`)})`
      );
    return this;
  }

  run(text: string): string {
    return text.replace(this.regex, (_match: string, key: string): string => {
      if (typeof key !== 'string') return '';
      if (this.reference instanceof Function) return this.reference(key);
      else return this.reference[key] ? this.reference[key] : this.reference.default;
    });
  }
}

let basicTemplater = new Templater();
basicTemplater.tag('{', '}');

export const basic = (text: string, reference: OBJECT_RESOLVER | FUNCTION_RESOLVER): string =>
  basicTemplater.set(reference).run(text);
