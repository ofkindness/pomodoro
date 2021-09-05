import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="block bg-gray-600 text-white uppercase text-lg mt-10 mr-2 mx-auto py-2 px-12 rounded"
      type="button"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};
