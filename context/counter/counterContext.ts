import { createContext } from 'react';

interface ContextState {
  clear: any;
  complete: any;
  counter: any;
  init: any;
  setTaskName: Function;
  setWorkInterval: Function;
  setShortbreakInterval: Function;
  setLongbreakInterval: Function;
  setIterations: Function;
  skip: any;
  startCounting: any;
  stopCounting: any;
}

export const CounterContext = createContext({} as ContextState);
