import React, { useReducer } from 'react';
import { CounterContext } from './counterContext';
import {
  counterReducer,
  initialCounterState,
  RestartAction,
  SkipAction,
  StartAction,
  StopAction,
} from './counterReducer';

export interface CounterStateProps {
  children?: JSX.Element;
}

export const CounterState = (props: CounterStateProps) => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const restart = () => dispatch(RestartAction);
  const skip = () => dispatch(SkipAction);
  const start = () => dispatch(StartAction);
  const stop = () => dispatch(StopAction);

  return (
    <CounterContext.Provider
      value={{
        counter: state,
        restart,
        skip,
        start,
        stop,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
