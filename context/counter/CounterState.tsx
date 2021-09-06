import React, { useReducer } from 'react';
import { CounterContext } from './counterContext';
import {
  CompleteAction,
  counterReducer,
  InitAction,
  initialCounterState,
  ClearAction,
  SetTaskName,
  SetWorkInterval,
  SetLongbreakInterval,
  SetShortbreakInterval,
  SetIterations,
  SkipAction,
  StartCounting,
  StopCounting,
} from './counterReducer';

export interface CounterStateProps {
  children?: JSX.Element;
}

export const defaultCounterValues = {
  taskName: 'Task Name',
  workInterval: 25,
  shortbreakInterval: 5,
  intervals: 3,
  longbreakInterval: 30,
};

export const CounterState = (props: CounterStateProps) => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const setTaskName = (taskName = defaultCounterValues.taskName) =>
    dispatch(SetTaskName(taskName, state));

  const setWorkInterval = (workInterval = defaultCounterValues.workInterval) =>
    dispatch(SetWorkInterval(workInterval, state));

  const setShortbreakInterval = (
    shortbreakInterval = defaultCounterValues.shortbreakInterval
  ) => dispatch(SetShortbreakInterval(shortbreakInterval, state));

  const setIterations = (iterations = defaultCounterValues.intervals) =>
    dispatch(SetIterations(iterations, state));

  const setLongbreakInterval = (
    longbreakInterval = defaultCounterValues.longbreakInterval
  ) => dispatch(SetLongbreakInterval(longbreakInterval, state));

  const startCounting = () => dispatch(StartCounting(state));
  const stopCounting = () => dispatch(StopCounting(state));

  const skip = () => dispatch(SkipAction);
  const init = () => dispatch(InitAction);
  const clear = () => dispatch(ClearAction);
  const complete = () => dispatch(CompleteAction);

  return (
    <CounterContext.Provider
      value={{
        clear,
        complete,
        counter: state,
        init,
        setTaskName,
        setWorkInterval,
        setShortbreakInterval,
        setLongbreakInterval,
        setIterations,
        skip,
        startCounting,
        stopCounting,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
