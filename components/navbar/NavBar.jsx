'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { GrContactInfo } from 'react-icons/gr';
import { MdCastForEducation } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { IoIosContacts } from 'react-icons/io';
import { usePathname } from 'next/navigation';
export default function NavBarPage() {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={
        isOpen
          ? 'absolute left-0 right-0 m-auto py-8 w-8/12 z-10 inset-0 h-screen'
          : 'absolute left-0 right-0 m-auto py-8 w-8/12 z-10'
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
                className={path === '/' ? ' active' : ' '}
                href={'/'}
                onClick={() => setIsOpen(false)}
              >
                <IoHomeOutline className="text-primary" />
                Home
              </Link>{' '}
              <Link
                className={path.includes('/about') ? ' active' : ' '}
                href={'/about'}
                onClick={() => setIsOpen(false)}
              >
                <GrContactInfo className="text-primary" />
                About
              </Link>
              <Link
                className={path.includes('/education') ? ' active' : ' '}
                href={'/education'}
                onClick={() => setIsOpen(false)}
              >
                <MdCastForEducation className="text-primary" />
                Education
              </Link>{' '}
              <Link
                className={path.includes('/skills') ? ' active' : ' '}
                href={'/skills'}
                onClick={() => setIsOpen(false)}
              >
                <GiSkills className="text-primary" />
                Skills
              </Link>{' '}
              <Link
                className={path.includes('/contact') ? ' active' : ' '}
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
      <div className="justify-between hidden md:flex ">
        <div className="mr-4 grow">
          <Link
            href={'/'}
            className="font-poppinsFont font-extrabold font-body text-3xl text-transparent"
          >
            WAEL.
          </Link>
        </div>
        <div className="absolute">
          <div className="mr-4">
            <Link
              href={'/'}
              className="myName font-poppinsFont font-extrabold font-body text-3xl "
            >
              WAEL.
            </Link>
          </div>
          <div className="mr-4 absolute left-0 top-0">
            <Link
              href={'/'}
              className=" font-extrabold font-body text-3xl text-transparent myNameStroke"
            >
              WAEL.
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-8/12 gap-3">
          <Link className={path === '/' ? ' active' : ' '} href={'/'}>
            <IoHomeOutline className="text-primary" />
            Home
          </Link>{' '}
          <Link
            className={path.includes('/about') ? ' active' : ' '}
            href={'/about'}
          >
            <GrContactInfo className="text-primary" />
            About
          </Link>
          <Link
            className={path.includes('/education') ? ' active' : ' '}
            href={'/education'}
          >
            <MdCastForEducation className="text-primary" />
            Education
          </Link>{' '}
          <Link
            className={path.includes('/skills') ? ' active' : ' '}
            href={'/skills'}
          >
            <GiSkills className="text-primary" />
            Skills
          </Link>{' '}
          <Link
            className={path.includes('/contact') ? ' active' : ' '}
            href={'/contact'}
          >
            <IoIosContacts className="text-primary" />
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
