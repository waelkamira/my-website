import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <section className=" mt-8 left-0 right-0 m-auto py-8 w-8/12">
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-6xl">
          About <span className="text-primary">Me</span>
        </h1>
        <div className="relative h-56 w-56 rounded-full border border-primary outline outline-primary outline-1 outline-offset-8">
          <Image
            src={'/my-photo.webp'}
            layout="fill"
            objectFit="cover"
            alt="my-photo"
            className=" rounded-full"
          />
        </div>
        <h1 className="mt-8">Full Stack Developer</h1>
      </div>
    </section>
  );
}
