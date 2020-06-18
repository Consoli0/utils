let regex = /(?:(?<!\\)|(?<=\\\\)){{([^{}\\]*)}}/g;

type OBJECT_RESOLVER = {
  [key: string]: string;
  default: string;
};

type FUNCTION_RESOLVER = (key: string) => string;

export default (text: string, reference: OBJECT_RESOLVER | FUNCTION_RESOLVER): string =>
  text.replace(/(?:(?<!\\)|(?<=\\\\)){{([^{}\\]*)}}/g, (_match: string, key: string): string => {
    if (typeof key !== 'string') return '';
    if (reference instanceof Function) return reference(key);
    else return reference[key] ? reference[key] : reference.default;
  });

export class Templater {
  private reference: OBJECT_RESOLVER | FUNCTION_RESOLVER;

  constructor() {
    this.reference = t => `{{${t}}}`;
  }

  set(reference: OBJECT_RESOLVER | FUNCTION_RESOLVER) {
    this.reference = reference;
  }

  run(text: string): string {
    return text.replace(regex, (_match: string, key: string): string => {
      if (typeof key !== 'string') return '';
      if (this.reference instanceof Function) return this.reference(key);
      else return this.reference[key] ? this.reference[key] : this.reference.default;
    });
  }
}
