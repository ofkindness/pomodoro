import React, { useContext } from 'react';
import { CounterContext } from '../context/counter/counterContext';

export const Counter: React.FC = () => {
  const { counter, skip, stop } = useContext(CounterContext);

  if (counter.isActive === true && counter.isComplete === false) {
    return (
      <div className="bg-white-500 px-5 py-5">
        <div className="text-white-100 ">
          <div className="pb-3 font-serif text-9xl text-white w-100  justify-center flex  bg-white bg-opacity-50 rounded-lg shadow-xl">
            {'00'}:{'00'}
          </div>
          <div className="text-sm text-center mt-3">Working time</div>
          <div className="text-sm text-center mt-3">
            Working on {'Pomodoro task'}
          </div>
          <div className="flex flex-row">
            <button className="block bg-gray-600 text-white uppercase  mt-10 mr-1 mx-auto py-2 px-12 rounded">
              Play
            </button>
            <button
              className="block bg-gray-600 text-white uppercase  mt-10 mr-1 mx-auto py-2 px-12 rounded"
              onClick={stop}
            >
              Complete
            </button>
            <button
              className="block bg-gray-600 text-white uppercase  mt-10 mr-1 mx-auto py-2 px-12 rounded"
              onClick={skip}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
