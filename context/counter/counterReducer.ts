enum ActionType {
  Complete = 'COMPLETE_COUNTER',
  Init = 'INIT_COUNTER',
  Clear = 'CLEAR_COUNTER',
  Skip = 'SKIP_COUNTER',
  StartCounting = 'START_COUNTING',
  StopCounting = 'STOP_COUNTING',
  SetCount = 'SET_COUNT',
  SetTaskName = 'SET_TASKNAME',
  SetWorkInterval = 'SET_WORKINTERVAL',
  SetShortbreakInterval = 'SET_SHORTBREAKINTERVAL',
  SetLongbreakInterval = 'SET_LONGBREAKINTERVAL',
  SetIterations = 'SET_ITERATIONS',
}

export enum IntervalType {
  'Working Time' = 1,
  'Short Break',
  'Long Break',
}

const results: number[] = [];

results[IntervalType['Working Time']] = 0;
results[IntervalType['Short Break']] = 0;
results[IntervalType['Long Break']] = 0;

const defaultCounterValues = {
  taskName: 'Task Name',
  workInterval: 25,
  shortbreakInterval: 5,
  iterations: 3,
  longbreakInterval: 30,
  results,
};

interface Action {
  type: ActionType;
  payload: State;
}

type State = {
  count: number;
  currentIntervalType?: number;
  currentIteration?: number;
  isActive: boolean;
  isComplete: boolean;
  isCounting: boolean;
  iterations: number;
  longbreakInterval: number;
  results?: number[];
  shortbreakInterval: number;
  taskName: string;
  workInterval: number;
};

export const initialCounterState: State = {
  count: 0,
  isActive: false,
  isComplete: false,
  isCounting: false,
  currentIteration: 0,
  currentIntervalType: IntervalType['Working Time'],
  ...defaultCounterValues,
};

const nextIntervalType = (
  currentIntervalType?: number,
  iterationsLeft?: number
) => {
  if (currentIntervalType === undefined) {
    return IntervalType['Working Time'];
  }

  if (currentIntervalType === IntervalType['Working Time']) {
    return IntervalType['Short Break'];
  }

  if (currentIntervalType === IntervalType['Short Break']) {
    if (iterationsLeft && iterationsLeft >= 0) {
      return IntervalType['Working Time'];
    }

    return IntervalType['Long Break'];
  }
};

const currentInterval = (state: State, currentIntervalType?: number) => {
  switch (currentIntervalType) {
    case IntervalType['Working Time']:
      return state.workInterval * 60;
    case IntervalType['Short Break']:
      return state.shortbreakInterval * 60;
    case IntervalType['Long Break']:
      return state.longbreakInterval * 60;
    default:
      return 0;
  }
};

const iterationsLeft = (
  currentIntervalType: number | undefined,
  iterations: number
) => {
  if (currentIntervalType === IntervalType['Short Break'] && iterations >= 0) {
    return iterations - 1;
  }

  return iterations;
};

export const InitAction = (state: State) => ({
  type: ActionType.Init,
  payload: {
    ...state,
    count: currentInterval(state, state.currentIntervalType),
    isActive: true,
    currentIntervalType: nextIntervalType(),
  },
});

export const ClearAction: Action = {
  type: ActionType.Clear,
  payload: {
    ...initialCounterState,
  },
};

export const SetCount = (count: number, state: State) => {
  return {
    type: ActionType.SetTaskName,
    payload: {
      ...state,
      count,
    },
  };
};

export const SetTaskName = (taskName: string, state: State) => {
  return {
    type: ActionType.SetTaskName,
    payload: {
      ...state,
      taskName,
    },
  };
};

export const SetWorkInterval = (workInterval: number, state: State) => {
  return {
    type: ActionType.SetWorkInterval,
    payload: {
      ...state,
      workInterval,
    },
  };
};

export const SetLongbreakInterval = (
  longbreakInterval: number,
  state: State
) => {
  return {
    type: ActionType.SetLongbreakInterval,
    payload: {
      ...state,
      longbreakInterval,
    },
  };
};

export const SetShortbreakInterval = (
  shortbreakInterval: number,
  state: State
) => {
  return {
    type: ActionType.SetShortbreakInterval,
    payload: {
      ...state,
      shortbreakInterval,
    },
  };
};

export const SetIterations = (iterations: number, state: State) => {
  return {
    type: ActionType.SetIterations,
    payload: {
      ...state,
      iterations,
    },
  };
};

export const StartCounting = (state: State) => {
  return {
    type: ActionType.StartCounting,
    payload: {
      ...state,
      isCounting: true,
    },
  };
};

export const StopCounting = (state: State) => {
  return {
    type: ActionType.StartCounting,
    payload: {
      ...state,
      isCounting: false,
    },
  };
};

export const SkipAction = (state: State) => {
  const results = state.results || [];

  if (state.currentIntervalType === IntervalType['Long Break']) {
    results[IntervalType['Long Break']] = state.count;
    return {
      type: ActionType.Skip,
      payload: {
        ...state,
        isCounting: false,
        isComplete: true,
        isActive: false,
        results,
      },
    };
  }

  if (state.currentIntervalType === IntervalType['Working Time']) {
    results[IntervalType['Working Time']] += state.count;
  }

  if (state.currentIntervalType === IntervalType['Short Break']) {
    results[IntervalType['Short Break']] += state.count;
  }

  const iterations = iterationsLeft(
    state.currentIntervalType,
    state.iterations
  );
  const currentIntervalType = nextIntervalType(
    state.currentIntervalType,
    iterations
  );

  const interval = currentInterval(state, currentIntervalType);

  return {
    type: ActionType.Skip,
    payload: {
      ...state,
      count: interval,
      isCounting: true,
      currentIntervalType,
      iterations,
      results,
    },
  };
};

export const CompleteAction = (state: State) => ({
  type: ActionType.Complete,
  payload: {
    ...state,
    isActive: false,
    isComplete: true,
  },
});

export function counterReducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionType.Clear:
    case ActionType.Complete:
    case ActionType.Init:
    case ActionType.SetCount:
    case ActionType.SetIterations:
    case ActionType.SetLongbreakInterval:
    case ActionType.SetShortbreakInterval:
    case ActionType.SetTaskName:
    case ActionType.SetWorkInterval:
    case ActionType.Skip:
    case ActionType.StartCounting:
    case ActionType.StopCounting:
      return {
        ...payload,
      };

    default:
      return state;
  }
}
