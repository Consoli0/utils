import { execSync } from 'child_process';

export class Stopwatch {
  #start: number = 0;
  #laps: Array<number> = [];
  #current: number = 0;
  #active: boolean = false;

  private updateTime() {
    if (this.#active) this.#current = Date.now();
  }

  start(): this {
    this.#start = Date.now();
    this.#current = Date.now();
    this.#active = true;
    return this;
  }

  stop(): this {
    this.#active = false;
    this.#current = Date.now();
    return this;
  }

  resume(): this {
    this.#active = true;
    this.#current = Date.now();
    return this;
  }

  lap(): number {
    this.#laps.push(Date.now());
    return 1;
  }

  get laps(): Array<number> {
    return this.#laps.map(v => v - this.#start);
  }

  get value(): number {
    this.updateTime();
    return this.#current - this.#start;
  }
}

export const asleep = (ms: number): Promise<void> => new Promise((resolve: (...args: any[]) => void) => setTimeout(resolve, ms));

export const sleep = (ms: number): null => {
  execSync(`"${process.execPath}" -e "setTimeout(() => true, ${ms});"`);
  return null;
};
