import React, { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../context/counter/counterContext';
import { CountDown } from './CountDown';
import { Button } from './UI/Button';

export const Counter: React.FC = () => {
  const { counter, startCounting, stopCounting, skip, complete } =
    useContext(CounterContext);

  if (counter.isActive === true && counter.isComplete === false) {
    return (
      <div className="bg-white-500 px-5 py-5">
        <div className="text-white-100 ">
          <CountDown
            isCounting={false}
            onComplete={skip}
            initialCountValue={10}
          />
          <div className="text-sm text-center mt-3">Working time</div>
          <div className="text-sm text-center mt-3">
            Working on {'Pomodoro task'}
          </div>
          <div className="flex flex-row">
            <Button name={'Play'} onClick={startCounting} />
            <Button name={'Stop'} onClick={stopCounting} />
            <Button name={'Complete'} onClick={complete} />
            <Button name={'Skip'} onClick={skip} />
          </div>
        </div>
      </div>
    );
  }

  return null;
};
