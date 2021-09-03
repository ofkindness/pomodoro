import React, { useContext } from 'react';
import { CounterContext } from '../context/counter/counterContext';

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

        <div className="flex flex-col mb-4">
          <div className="inline-block relative">
            <select
              defaultValue={'DEFAULT'}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="DEFAULT" disabled>
                Pomodoro
              </option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <div className="inline-block relative">
            <select
              defaultValue={'DEFAULT'}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="DEFAULT" disabled>
                Short Break
              </option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <div className="inline-block relative">
            <select
              defaultValue={'DEFAULT'}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="DEFAULT" disabled>
                Long Break
              </option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <div className="inline-block relative">
            <select
              defaultValue={'DEFAULT'}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="DEFAULT" disabled>
                Long Break Interval
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          className="block bg-gray-600 text-white uppercase text-lg mt-10 mx-auto py-2 px-12 rounded"
          type="submit"
          onClick={start}
        >
          Begin
        </button>
      </form>
    );
  }

  return null;
};
