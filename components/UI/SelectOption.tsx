import React from 'react';

interface SelectOptionProps {
  name: string;
  values: number[];
  onChange: any;
  defaultValue?: any;
}

export const SelectOption = (props: SelectOptionProps) => (
  <div className="flex flex-col mb-4">
    <div className="inline-block relative">
      <span className="text-gray-700">{props.name}</span>
      <select
        defaultValue={props.defaultValue}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.values.map((value, i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}
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
);
