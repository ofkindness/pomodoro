import { createContext } from 'react';

interface ContextState {
  clear: any;
  complete: any;
  counter: any;
  init: any;
  setCount: Function;
  setIterations: Function;
  setLongbreakInterval: Function;
  setShortbreakInterval: Function;
  setTaskName: Function;
  setWorkInterval: Function;
  skip: any;
  startCounting: any;
  stopCounting: any;
}

export const CounterContext = createContext({} as ContextState);
