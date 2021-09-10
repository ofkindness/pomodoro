import React, { useEffect, useContext } from 'react';

import { CounterContext } from '../context/counter/counterContext';

export const CountDown = () => {
  const { counter, setCount } = useContext(CounterContext);

  useEffect(() => {
    if (counter.isCounting == true && counter.count > 0) {
      const timer = setInterval(() => setCount(counter.count - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter.isCounting, counter.count]);

  const minutes = Math.floor(counter.count / 60);
  const seconds = counter.count - minutes * 60;

  return (
    <div className="pb-5 pt-3 font-serif text-9xl text-white w-100  justify-center flex  bg-white bg-opacity-50 rounded-lg shadow-xl">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
};
