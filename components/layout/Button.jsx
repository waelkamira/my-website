import React from 'react';

export default function Button({ name, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        className +
        ' rounded-md py-3 text-lg font-bold w-32 sm:w-44 text-nowrap font-body sm:text-xl shadow-md cursor-pointer'
      }
    >
      {name}
    </button>
  );
}
