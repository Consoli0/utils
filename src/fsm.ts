export type FSMState = {
  id: string;
  description?: string;
  targets: {
    [state: string]: string;
  };
};

export type FSMStates = Array<FSMState>;
export type FSMInternalStates = Map<string, FSMState>;

export class FiniteStateMachine {
  #states: FSMInternalStates;
  #state: string;

  constructor(initial: string, states: FSMStates) {
    this.#states = new Map();
    states.forEach(state => this.#states.set(state.id, state));
    this.#state = initial;
  }

  get state(): FSMState | null {
    if (!this.#states.has(this.#state)) return null;
    return <FSMState>this.#states.get(this.#state);
  }

  run(input: string): FSMState | null {
    let state = this.state;
    if (!this.valid(input) || !state) return null;
    this.#state = state.targets[input];
    return state;
  }

  valid(input: string): boolean {
    let state = this.state;
    if (!state) return false;
    return state.targets.hasOwnProperty(input);
  }
}
