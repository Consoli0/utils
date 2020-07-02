export type FSMState<StateName extends string> = {
  id: StateName;
  targets: Array<StateName>;
};

export type FSMStates<StateName extends string> = Array<FSMState<StateName>>;
export type FSMInternalStates<StateName extends string> = Map<StateName, FSMState<StateName>>;

export class FiniteStateMachine<StateName extends string> {
  #states: FSMInternalStates<StateName>;
  #state: StateName;

  constructor(initial: StateName, states: FSMStates<StateName>) {
    this.#states = new Map();
    states.forEach(state => this.#states.set(state.id, state));
    this.#state = initial;
  }

  get state(): FSMState<StateName> | null {
    if (!this.#states.has(this.#state)) return null;
    return <FSMState<StateName>>this.#states.get(this.#state);
  }

  run(input: StateName): FSMState<StateName> | null {
    let state = this.state;
    if (!this.valid(input) || !state) return null;
    this.#state = input;
    return state;
  }

  valid(input: StateName): boolean {
    let state = this.state;
    if (!state) return false;
    return state.targets.includes(input);
  }
}
