import ProgressBar from '../../components/layout/ProgressBar';
import React from 'react';

export default function SkillsPage() {
  return (
    <section className="page mt-24 pt-4 my-8">
      <div className="flex justify-center">
        <h1 className="text-4xl sm:text-7xl">
          My <span className="text-primary">Skills</span>
        </h1>
      </div>

      <div className="flex justify-between px-4">
        <div>
          <ProgressBar percentage={93} skill={'HTML'} />
          <ProgressBar percentage={71} skill={'CSS'} />
          <ProgressBar percentage={74} skill={'JAVASCRIPT'} />
          <ProgressBar percentage={85} skill={'REACT'} />
          <ProgressBar percentage={80} skill={'NEXT.JS'} />
        </div>
        <div>
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
