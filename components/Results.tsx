import React, { useContext } from 'react';
import { CounterContext } from '../context/counter/counterContext';

export const Results: React.FC = () => {
  const { counter, restart } = useContext(CounterContext);

  if (counter.isActive === false && counter.isComplete === true) {
    return (
      <form className="mb-4">
        <div>Well Done</div>
        <button
          className="block bg-gray-600 text-white uppercase text-lg mt-10 mx-auto py-2 px-12 rounded"
          type="submit"
          onClick={restart}
        >
          Create New Task
        </button>
      </form>
    );
  }

  return null;
};
