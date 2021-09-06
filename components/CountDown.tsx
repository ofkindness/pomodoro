import React, { useState, useEffect, useContext } from 'react';
import { CounterContext } from '../context/counter/counterContext';

interface CountDownProps {
  initialCountValue: number;
  isCounting: boolean;
  onComplete: Function;
}

export const CountDown = (props: CountDownProps) => {
  const [count, setCount] = useState(props.initialCountValue);
  const { counter } = useContext(CounterContext);

  useEffect(() => {
    if (counter.isCounting == true && count > 0) {
      const timer = setInterval(() => setCount(count - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter.isCounting, count]);

  return (
    <div className="pb-3 font-serif text-9xl text-white w-100  justify-center flex  bg-white bg-opacity-50 rounded-lg shadow-xl">
      {'00'}:{count}
    </div>
  );
};
