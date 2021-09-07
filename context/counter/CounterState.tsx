import React, { useReducer } from 'react';
import { CounterContext } from './counterContext';
import {
  ClearAction,
  CompleteAction,
  counterReducer,
  InitAction,
  initialCounterState,
  SetIterations,
  SetLongbreakInterval,
  SetShortbreakInterval,
  SetTaskName,
  SetWorkInterval,
  SkipAction,
  StartCounting,
  StopCounting,
} from './counterReducer';

export interface CounterStateProps {
  children?: JSX.Element;
}

export const CounterState = (props: CounterStateProps) => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const clear = () => dispatch(ClearAction);

  const complete = () => dispatch(CompleteAction(state));

  const init = () => dispatch(InitAction(state));

  const setIterations = (iterations: number) =>
    dispatch(SetIterations(iterations, state));

  const setLongbreakInterval = (longbreakInterval: number) =>
    dispatch(SetLongbreakInterval(longbreakInterval, state));

  const setShortbreakInterval = (shortbreakInterval: number) =>
    dispatch(SetShortbreakInterval(shortbreakInterval, state));

  const setTaskName = (taskName: string) =>
    dispatch(SetTaskName(taskName, state));

  const setWorkInterval = (workInterval: number) =>
    dispatch(SetWorkInterval(workInterval, state));

  const skip = () => dispatch(SkipAction(state));

  const startCounting = () => dispatch(StartCounting(state));

  const stopCounting = () => dispatch(StopCounting(state));

  return (
    <CounterContext.Provider
      value={{
        clear,
        complete,
        counter: state,
        init,
        setIterations,
        setLongbreakInterval,
        setShortbreakInterval,
        setTaskName,
        setWorkInterval,
        skip,
        startCounting,
        stopCounting,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
