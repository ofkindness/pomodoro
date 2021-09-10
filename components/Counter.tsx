import React, { useContext } from 'react';

import { Button } from './UI/Button';
import { CountDown } from './CountDown';
import { CounterContext } from '../context/counter/counterContext';
import { IntervalType } from '../context/counter/counterReducer';

export const Counter: React.FC = () => {
  const { counter, startCounting, stopCounting, skip, complete } =
    useContext(CounterContext);
  if (counter.isActive === true && counter.isComplete === false) {
    return (
      <div className="bg-white-500 px-5 py-5">
        <div className="text-white-100 ">
          <CountDown />
          <div className="text-sm text-center mt-3">
            Working on: {counter.taskName}
          </div>
          <div className="text-sm text-center mt-3">
            {IntervalType[counter.currentIntervalType]}
          </div>
          <div className="text-sm text-center mt-3">
            Iterations Left: {counter.iterations}
          </div>
          <div className="flex flex-row">
            {counter.isCounting === true ? (
              <Button name={'Stop'} onClick={stopCounting} />
            ) : (
              <Button name={'Play'} onClick={startCounting} />
            )}
            <Button name={'Complete'} onClick={complete} />
            <Button name={'Skip'} onClick={skip} />
          </div>
        </div>
      </div>
    );
  }

  return null;
};
