enum ActionType {
  Start = 'START_COUNTER',
  Stop = 'STOP_COUNTER',
}

interface Action {
  type: ActionType;
  payload: State;
}

type State = {
  isActive: boolean;
};

export const initialCounterState: State = {
  isActive: false,
};

export const StopAction: Action = {
  type: ActionType.Stop,
  payload: {
    isActive: false,
  },
};

export const StartAction: Action = {
  type: ActionType.Start,
  payload: {
    isActive: true,
  },
};

export function counterReducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case ActionType.Start:
      return {
        ...action.payload,
      };

    case ActionType.Stop:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
