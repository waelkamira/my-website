import React from 'react';

export default function Button({ name, className }) {
  return (
    <button
      className={
        className +
        ' rounded-md py-3 px-4  sm:px-8 font-bold w-30 sm:w-40 text-nowrap'
      }
    >
      {name}
    </button>
  );
}
