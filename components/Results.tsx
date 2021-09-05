import React, { useContext } from 'react';
import { CounterContext } from '../context/counter/counterContext';
import { Button } from './UI/Button';

export const Results: React.FC = () => {
  const { counter, restart } = useContext(CounterContext);

  if (counter.isActive === false && counter.isComplete === true) {
    return (
      <form className="mb-4">
        <div>Well Done</div>
        <Button name={'Create New Task'} onClick={restart} />
      </form>
    );
  }

  return null;
};
