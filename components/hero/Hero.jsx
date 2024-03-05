import Image from 'next/image';
import React from 'react';
import Button from '../layout/Button';
import Link from 'next/link';

export default function HeroPage() {
  return (
    <section className="mt-8 p-4">
      <div className=" text-white flex flex-col items-center justify-between ">
        <div className="flex flex-col justify-center p-4 sm:p-4 sm:pl-0 text-center sm:text-left ">
          <h1 className="lg:text-6xl lg:font-extrabold mb-0">
            Hi, I'm Wael Kamira
          </h1>
          <div className="mb-12 md:mb-18 lg:mb-24 flex justify-center sm:justify-start">
            <div className="absolute z-30">
              <h1 className="fullStack stroke lg:text-4xl lg:font-extrabold text-lg text-nowrap">
                FULL-STACK DEVELOPER
              </h1>
              <h1 className="absolute stroke lg:text-4xl lg:font-extrabold text-transparent text-lg text-nowrap top-0 left-0 z-0 ">
                FULL-STACK DEVELOPER
              </h1>
            </div>
          </div>
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
          <Link
            href={'https://www.linkedin.com/in/wael-kamira-9b709726b/'}
            target="_blank"
          >
            <Button name={'Hire Me'} className={' btn hover:text-primary'} />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/wael-kamira-9b709726b/'}
            target={'_blank'}
          >
            <Button
              name={"Let's Talk"}
              className={'btn2 hover:text-secondary'}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
