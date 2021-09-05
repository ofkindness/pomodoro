import React, { useContext } from 'react';
import { CounterContext } from '../context/counter/counterContext';
import { SelectOption } from './UI/SelectOption';
import { Button } from './UI/Button';

export const SetupCounter: React.FC = () => {
  const { counter, start } = useContext(CounterContext);

  if (counter.isActive === false && counter.isComplete === false) {
    return (
      <form className="mb-4">
        <div className="flex flex-col mb-4">
          <input
            className="border py-2 px-3 text-grey-darkest"
            type="text"
            defaultValue="Task Name"
            name="taskName"
            id="taskName"
          />
        </div>

        <SelectOption name={'Pomodoro'} values={[15, 20, 25]} />

        <SelectOption name={'Short Break'} values={[15, 20, 25]} />

        <SelectOption name={'Long Break'} values={[15, 20, 25]} />

        <SelectOption name={'Long Break Interval'} values={[1, 2, 3]} />

        <div className="items-center">
          <Button onClick={start} name={'Begin'} />
        </div>
      </form>
    );
  }

  return null;
};
