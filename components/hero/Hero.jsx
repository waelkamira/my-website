import Image from 'next/image';
import React from 'react';
import Button from '../layout/Button';

export default function HeroPage() {
  return (
    <section className="mt-8">
      <div className=" text-white flex flex-col items-center">
        <div className=" p-4 sm:p-4 sm:pl-0 text-center sm:text-left">
          <h1>HELLO, I AM WAEL KAMIRA</h1>
          <h1>FULL STACK DEVELOPER</h1>
          <p>
            Dear Hiring Manager, Having followed your company's success for
            multiple years, I would welcome the privilege of contributing to
            future growth and success as the new Frontend Developer. I am
            confident that my academic history and aptitude for creative
            problem-solving will be an invaluable addition to your existing
            team.
          </p>
        </div>
        <div className="flex gap-4 sm:gap-10 mt-8 mb-4">
          <Button name={'Hire Me'} className={'bg-primary text-secondary'} />
          <Button
            name={"Let's Talk"}
            className={'bg-secondary text-primary border-2 border-primary'}
          />
        </div>
      </div>
    </section>
  );
}
