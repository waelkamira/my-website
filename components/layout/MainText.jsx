import React from 'react';

export default function MainText({ mainText, subText }) {
  return (
    <h1 className="text-5xl md:text-7xl text-nowrap my-16">
      {subText} <span className="text-primary">{mainText}</span>
    </h1>
  );
}
