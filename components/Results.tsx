import React, { useContext } from 'react';

import { Button } from './UI/Button';
import { CounterContext } from '../context/counter/counterContext';
import { IntervalType } from '../context/counter/counterReducer';

export const Results: React.FC = () => {
  const { counter, clear } = useContext(CounterContext);
  if (counter.isActive === false && counter.isComplete === true) {
    return (
      <form className="mb-4">
        <div>Well Done</div>
        <div>
          Total Working time: {counter.results[IntervalType['Working Time']]}
        </div>
        <div>
          Total Break time:{' '}
          {counter.results[IntervalType['Short Break']] +
            counter.results[IntervalType['Long Break']]}
        </div>
        <Button name={'Create New Task'} onClick={clear} />
      </form>
    );
  }

  return null;
};
