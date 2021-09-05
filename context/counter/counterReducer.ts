enum ActionType {
  Init = 'INIT_COUNTER',
  Start = 'START_COUNTER',
  Skip = 'SKIP_COUNTER',
  Stop = 'STOP_COUNTER',
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
  taskName?: string;
  currentIntervalType?: IntervalType;
};

export const initialCounterState: State = {
  isActive: false,
  isComplete: false,
};

const initialCountValue = 60;

export const SkipAction: Action = {
  type: ActionType.Skip,
  payload: {
    isActive: false,
    isComplete: false,
  },
};

export const RestartAction: Action = {
  type: ActionType.Start,
  payload: {
    isActive: false,
    isComplete: false,
  },
};

export const StartAction: Action = {
  type: ActionType.Start,
  payload: {
    isActive: true,
    isComplete: false,
    currentIntervalType: IntervalType['Working Time'],
  },
};

export const StopAction: Action = {
  type: ActionType.Stop,
  payload: {
    isActive: false,
    isComplete: true,
  },
};

export function counterReducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case ActionType.Start:
    case ActionType.Stop:
    case ActionType.Skip:
      return {
        ...payload,
      };

    default:
      return state;
  }
}
