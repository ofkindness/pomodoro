import React, { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../context/counter/counterContext';
import { Button } from './UI/Button';

export const Counter: React.FC = () => {
  const { counter, start, skip, stop } = useContext(CounterContext);
  const [count, setCount] = useState(60);
  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => setCount(count - 1), 1000);
      return () => clearInterval(timer);
    }
    return skip();
  }, [count]);

  if (counter.isActive === true && counter.isComplete === false) {
    return (
      <div className="bg-white-500 px-5 py-5">
        <div className="text-white-100 ">
          <div className="pb-3 font-serif text-9xl text-white w-100  justify-center flex  bg-white bg-opacity-50 rounded-lg shadow-xl">
            {'00'}:{count}
          </div>
          <div className="text-sm text-center mt-3">Working time</div>
          <div className="text-sm text-center mt-3">
            Working on {'Pomodoro task'}
          </div>
          <div className="flex flex-row">
            <Button name={'Play'} onClick={start} />
            <Button name={'Complete'} onClick={stop} />
            <Button name={'Skip'} onClick={skip} />
          </div>
        </div>
      </div>
    );
  }

  return null;
};
