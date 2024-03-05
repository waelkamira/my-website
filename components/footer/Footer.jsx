import React from 'react';
import { LuLinkedin } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import Link from 'next/link';

export default function FooterPage() {
  return (
    <section className="relative mt-20 ">
      <div className="flex gap-4 absolute bottom-0 lg:bottom-8 lg:left-80 lg:w-fit w-full justify-center ">
        <Link
          href={'https://www.linkedin.com/in/wael-kamira-9b709726b/'}
          target="_blank"
          className="rounded-full border border-double bottom-4 border-primary my-4 icon"
        >
          <LuLinkedin className="text-primary text-2xl hover:text-secondary p-2" />
        </Link>
        <Link
          href={'https://github.com/waelkamira'}
          target="_blank"
          className="rounded-full border border-double bottom-4 border-primary my-4 icon"
        >
          <FiGithub className="text-primary text-2xl hover:text-secondary p-2" />
        </Link>
        <Link
          href={'https://www.facebook.com/WaelKhamira/'}
          target="_blank"
          className="rounded-full border border-double bottom-4 border-primary my-4 icon"
        >
          <FiFacebook className="text-primary text-2xl hover:text-secondary p-2" />
        </Link>
      </div>
    </section>
  );
}
