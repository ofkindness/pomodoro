enum ActionType {
  Complete = 'COMPLETE_COUNTER',
  Init = 'INIT_COUNTER',
  Clear = 'CLEAR_COUNTER',
  Skip = 'SKIP_COUNTER',
  StartCounting = 'START_COUNTING',
  StopCounting = 'STOP_COUNTING',
  SetTaskName = 'SETUP_TASKNAME',
  SetWorkInterval = 'SETUP_WORKINTERVAL',
  SetShortbreakInterval = 'SETUP_SHORTBREAKINTERVAL',
  SetLongbreakInterval = 'SETUP_LONGBREAKINTERVAL',
  SetIterations = 'SETUP_ITERATIONS',
}

enum IntervalType {
  'Working Time' = 1,
  'Break',
  'LongBreak',
}

interface Action {
  type: ActionType;
  payload: State;
}

type State = {
  count?: number;
  isActive: boolean;
  isComplete: boolean;
  isCounting?: boolean;
  taskName?: string;
  currentIntervalType?: IntervalType;
};

export const initialCounterState: State = {
  isActive: false,
  isComplete: false,
};

const initialCount = 10;

export const ClearAction: Action = {
  type: ActionType.Init,
  payload: {
    isActive: false,
    isComplete: false,
  },
};

export const InitAction: Action = {
  type: ActionType.Init,
  payload: {
    isActive: true,
    isComplete: false,
    isCounting: false,
    count: initialCount,
    currentIntervalType: IntervalType['Working Time'],
  },
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

export const SkipAction: Action = {
  type: ActionType.Skip,
  payload: {
    isActive: false,
    isComplete: false,
  },
};

export const CompleteAction: Action = {
  type: ActionType.Complete,
  payload: {
    isActive: false,
    isComplete: true,
  },
};

export function counterReducer(state: State, action: Action): State {
  const { type, payload } = action;

  console.log({ type, payload });
  switch (type) {
    case ActionType.SetTaskName:
    case ActionType.SetWorkInterval:
    case ActionType.SetShortbreakInterval:
    case ActionType.SetLongbreakInterval:
    case ActionType.SetIterations:
    case ActionType.StartCounting:
    case ActionType.StopCounting:
    case ActionType.Complete:
    case ActionType.Init:
    case ActionType.Clear:
    case ActionType.Skip:
      return {
        ...payload,
      };

    default:
      return state;
  }
}
