'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Section from '../Section';
import { CgMenuRight } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  console.log(hamburger);

  const changeMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <Section className="justify-start flex items-center h-[64px] border-b bg-customLight border-b-gray-300 w-full z-50">
      <div className=" w-full hidden justify-between md:flex">
        <ul className="flex gap-8 font-semibold text-[20px] ">
          <li className="hover:text-orange-600 transition duration-500">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hover:text-orange-600 transition duration-500">
            <Link href={'#portfolio'}>Portfolio</Link>
          </li>
          <li className="hover:text-orange-600 transition duration-500">
            <Link href={'#about'}>About</Link>
          </li>
          <li className="hover:text-orange-600 transition duration-500">
            <Link href={'#contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex md:hidden justify-end w-full">
        <CgMenuRight size={40} onClick={() => changeMenu()} />
      </div>
      {hamburger && (
        <div className="fixed h-screen w-screen left-0 top-0 bg-customLight2 z-50 justify-center flex flex-col bg-gradient-to-r from-customLight2 to-customWhite">
          <div className="justify-center absolute top-8 right-8">
            <GrClose size={40} onClick={() => changeMenu()} />
          </div>
          <ul className="flex flex-col gap-8 font-semibold text-3xl items-center justify-center ">
            <li className="">
              <Link href={'/'} onClick={() => changeMenu()}>
                Home
              </Link>
            </li>
            <li>
              <Link href={'#portfolio'} onClick={() => changeMenu()}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href={'#about'} onClick={() => changeMenu()}>
                About
              </Link>
            </li>
            <li>
              <Link href={'#contact'} onClick={() => changeMenu()}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Section>
  );
};

export default Navbar;
