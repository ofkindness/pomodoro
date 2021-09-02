import React from 'react';
import { CounterContext } from './СounterContext';

export interface CounterStateProps {
  children?: JSX.Element;
}

export const CounterState = (props: CounterStateProps) => {
  return (
    <CounterContext.Provider value>{props.children}</CounterContext.Provider>
  );
};
