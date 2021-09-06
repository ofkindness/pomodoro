import React, { useContext, useState } from 'react';
import { CounterContext } from '../context/counter/counterContext';
import { SelectOption } from './UI/SelectOption';
import { Button } from './UI/Button';
import { defaultCounterValues } from '../context/counter/CounterState';

export const SetupCounter: React.FC = () => {
  const {
    counter,
    init,
    setTaskName,
    setWorkInterval,
    setShortbreakInterval,
    setIterations,
    setLongbreakInterval,
  } = useContext(CounterContext);

  if (counter.isActive === false && counter.isComplete === false) {
    return (
      <form className="mb-4">
        <div className="flex flex-col mb-4">
          <input
            className="border py-2 px-3 text-grey-darkest"
            defaultValue={defaultCounterValues.taskName}
            onChange={(e) => setTaskName(e.target.value)}
            type="text"
          />
        </div>

        <SelectOption
          name={'Work Interval'}
          onChange={setWorkInterval}
          defaultValue={defaultCounterValues.workInterval}
          values={[15, 20, 25]}
        />

        <SelectOption
          name={'Short Break Interval'}
          onChange={setShortbreakInterval}
          defaultValue={defaultCounterValues.shortbreakInterval}
          values={[5, 10, 15]}
        />

        <SelectOption
          name={'Iterations'}
          onChange={setIterations}
          defaultValue={defaultCounterValues.intervals}
          values={[1, 2, 3]}
        />

        <SelectOption
          name={'Long Break Interval'}
          onChange={setLongbreakInterval}
          defaultValue={defaultCounterValues.longbreakInterval}
          values={[20, 25, 30]}
        />

        <div className="items-center">
          <Button onClick={init} name={'Begin'} />
        </div>
      </form>
    );
  }

  return null;
};
