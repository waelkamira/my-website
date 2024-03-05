'use client';
import Button from '../../components/layout/Button';
import Image from 'next/image';
import React, { useState } from 'react';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <section className="page mt-8 pb-4 ">
      <div className="flex flex-col md:items-left mt-16 ">
        <div className="flex flex-col items-left w-fit ">
          <div className="flex flex-col items-center lg:px-12 w-fit ">
            <h1 className="text-4xl sm:text-7xl">
              About <span className="text-primary">Me</span>
            </h1>
            <div className="relative h-56 w-56 rounded-full border border-primary outline outline-primary outline-1 outline-offset-8">
              <Image
                src={'/photo.png'}
                layout="fill"
                objectFit="cover"
                alt="my-photo"
                className=" rounded-full"
              />
            </div>
            <h1 className="mt-8 text-xl sm:text-2xl text-nowrap">
              Full-Stack Developer
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <div>
              {!isOpen && (
                <pre className="leading-8 text-lg line-clamp-3 px-16 text-wrap text-center">
                  Hello, I'm{' '}
                  <span className="text-primary text-2xl">Wael Kamira</span> I'm
                  a passionate Full Stack Developer with expertise in crafting
                  dynamic web applications. With a solid foundation in{' '}
                  <span className="text-primary">Next.js, Node.js</span>,
                  <span className="text-primary">Tailwind CSS</span>,{' '}
                  <span className="text-primary">HTML & JavaScript</span>, and
                  <span className="text-primary"> React</span>, I bring a blend
                  of technical skills and creative vision to every project.Why
                  Choose Me?{' '}
                  <span className="text-primary">Next.js & React</span>{' '}
                  Specialist: I specialize in building user-friendly interfaces
                  using Next.js and
                  <span className="text-primary"> React</span>, ensuring
                  seamless navigation and engaging user experiences. Node.js
                  Backend Expertise: Leveraging the power of ...
                </pre>
              )}
              {isOpen && (
                <pre className="leading-8 text-lg md:px-16 text-center sm:text-start text-wrap ">
                  Hello, I'm{' '}
                  <span className="text-primary text-2xl">Wael Kamira</span> I'm
                  a passionate Full Stack Developer with expertise in crafting
                  dynamic web applications. <br />
                  With a solid foundation in{' '}
                  <span className="text-primary">Next.js, Node.js</span>,
                  <span className="text-primary">Tailwind CSS</span>,{' '}
                  <span className="text-primary">HTML & JavaScript</span>, and
                  <span className="text-primary"> React</span>, I bring a blend
                  of technical skills and creative vision to every project.
                  <br />
                  Why Choose Me?{' '}
                  <span className="text-primary">Next.js & React</span>{' '}
                  Specialist: I specialize in building user-friendly interfaces
                  using Next.js and
                  <span className="text-primary"> React</span>, ensuring
                  seamless navigation and engaging user experiences.
                  <br />
                  Node.js Backend Expertise: Leveraging the power of Node.js, I
                  develop robust server-side applications and APIs that drive
                  the functionality of your web projects.
                  <br />
                  <span className="text-primary">Tailwind CSS</span> Maven: My
                  proficiency in
                  <span className="text-primary"> Tailwind CSS</span> allows me
                  to design sleek and responsive layouts, delivering visually
                  stunning websites with clean and maintainable code. <br />
                  Collaborative Spirit: I thrive in collaborative environments,
                  working closely with teams to bring ideas to life and deliver
                  exceptional results that exceed expectations.
                  <br /> Continuous Learning: In the fast-paced world of web
                  development, I'm committed to staying ahead of the curve by
                  continuously expanding my knowledge and embracing new
                  technologies.
                </pre>
              )}
            </div>
            <Button
              name={isOpen ? 'Read Less' : 'Read More'}
              className={'btn hover:text-primary'}
              onClick={(e) => {
                console.log('this is e', e.target.value);
                setIsOpen(!isOpen);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
