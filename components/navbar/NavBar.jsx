'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { GrContactInfo } from 'react-icons/gr';
import { MdCastForEducation } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { IoIosContacts } from 'react-icons/io';

export default function NavBarPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={
        isOpen
          ? 'absolute left-0 right-0 m-auto py-8 w-8/12 text-white z-10 inset-0 h-screen'
          : 'absolute left-0 right-0 m-auto py-8 w-8/12 text-white z-10'
      }
      onClick={() => setIsOpen(false)}
    >
      <div className="md:hidden w-fit" onClick={(e) => e.stopPropagation()}>
        <div className=" text-primary text-2xl">
          <IoMdMenu onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div>
          {isOpen && (
            <div className="flex flex-col gap-4 ml-6 ">
              <Link
                className="flex gap-2 items-center "
                href={'/'}
                onClick={() => setIsOpen(false)}
              >
                <IoHomeOutline className="text-primary" />
                Home
              </Link>{' '}
              <Link
                className="flex gap-2 items-center "
                href={'/about'}
                onClick={() => setIsOpen(false)}
              >
                <GrContactInfo className="text-primary" />
                About
              </Link>
              <Link
                className="flex gap-2 items-center "
                href={'/education'}
                onClick={() => setIsOpen(false)}
              >
                <MdCastForEducation className="text-primary" />
                Education
              </Link>{' '}
              <Link
                className="flex gap-2 items-center "
                href={'/skills'}
                onClick={() => setIsOpen(false)}
              >
                <GiSkills className="text-primary" />
                Skills
              </Link>{' '}
              <Link
                className="flex gap-2 items-center "
                href={'/contact'}
                onClick={() => setIsOpen(false)}
              >
                <IoIosContacts className="text-primary" />
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
      <ul className="justify-between hidden md:flex">
        <div className="mr-4">
          <Link href={'/'}>WAEL.</Link>
        </div>
        <div className="flex gap-10">
          <Link className="flex gap-2 items-center" href={'/'}>
            <IoHomeOutline className="text-primary" />
            Home
          </Link>{' '}
          <Link className="flex gap-2 items-center" href={'/about'}>
            <GrContactInfo className="text-primary" />
            About
          </Link>
          <Link className="flex gap-2 items-center" href={'/education'}>
            <MdCastForEducation className="text-primary" />
            Education
          </Link>{' '}
          <Link className="flex gap-2 items-center" href={'/skills'}>
            <GiSkills className="text-primary" />
            Skills
          </Link>{' '}
          <Link className="flex gap-2 items-center" href={'/contact'}>
            <IoIosContacts className="text-primary" />
            Contact
          </Link>
        </div>
      </ul>
    </section>
  );
}
