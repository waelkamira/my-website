import MainText from '../../components/layout/MainText';
import ProgressBar from '../../components/layout/ProgressBar';
import React from 'react';

export default function SkillsPage() {
  return (
    <section className="page mt-16 mb-8">
      <div className="flex justify-center">
        <MainText subText={'My'} mainText={'Skills'} />
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-12 gap-8">
        <div className="w-full">
          <h1 className="mb-2 left-4 pb-4">Front-End</h1>
          <ProgressBar percentage={93} skill={'HTML'} />
          <ProgressBar percentage={71} skill={'CSS'} />
          <ProgressBar percentage={74} skill={'JAVASCRIPT'} />
          <ProgressBar percentage={85} skill={'REACT'} />
          <ProgressBar percentage={80} skill={'NEXT.JS'} />
        </div>
        <div className="w-full">
          <h1 className="mb-2 left-4 pb-4">Back-End</h1>
          <ProgressBar percentage={60} skill={'NODE.JS'} />
          <ProgressBar percentage={60} skill={'EXPRESS'} />
          <ProgressBar percentage={73} skill={'MONGODB'} />
          <ProgressBar percentage={75} skill={'TAILWIND CSS'} />
          <ProgressBar percentage={60} skill={'STRIPE'} />
        </div>
      </div>
    </section>
  );
}
