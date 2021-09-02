import React, { useReducer } from 'react';
import { CounterContext } from './counterContext';
import {
  counterReducer,
  initialCounterState,
  StartAction,
  StopAction,
} from './counterReducer';

export interface CounterStateProps {
  children?: JSX.Element;
}

export const CounterState = (props: CounterStateProps) => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const start = () => dispatch(StartAction);

  const stop = () => dispatch(StopAction);

  return (
    <CounterContext.Provider value={{ start, stop, counter: state }}>
      {props.children}
    </CounterContext.Provider>
  );
};
