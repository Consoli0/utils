import { func } from '.';

export type EnterFunction = {
  (): ExitFunction;
  _: Toggler;
};

export type ExitFunction = {
  (): EnterFunction;
  _: Toggler;
};

export type ToggleFunction = {
  (): ToggleFunction;
  _: Toggler;
};

export class Toggler {
  private values: {
    [key: string]: boolean;
  };

  constructor() {
    this.values = {};
  }

  define(key: string): this {
    if (this.values[key] === undefined) this.set(key, false);
    return this;
  }

  set(key: string, value: boolean): this {
    this.define(key);
    this.values[key] = value;
    return this;
  }

  get(key: string): boolean {
    this.define(key);
    return this.values[key];
  }

  useEnterExit(key: string): EnterFunction {
    this.define(key);
    let enter = func.makeCallable(
      { _: this },
      (): ExitFunction => {
        this.set(key, true);
        return func.makeCallable({ _: this }, () => {
          this.set(key, false);
          return enter;
        });
      }
    );

    return enter;
  }

  useToggle(key: string): ToggleFunction {
    this.define(key);
    let toggle = func.makeCallable(
      { _: this },
      (): ToggleFunction => {
        this.toggle(key);
        return toggle;
      }
    );
    return toggle;
  }

  toggle(key: string): this {
    this.define(key);
    this.set(key, !this.get(key));
    return this;
  }
}
