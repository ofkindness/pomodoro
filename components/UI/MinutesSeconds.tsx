import React, { MouseEventHandler } from 'react';

interface MinutesSecondsProps {
  seconds: number;
}

export const MinutesSeconds = (props: MinutesSecondsProps) => {
  const minutes = Math.floor(props.seconds / 60);
  const seconds = props.seconds - minutes * 60;
  return (
    <>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </>
  );
};
