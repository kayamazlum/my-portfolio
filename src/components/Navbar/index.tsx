'use client';
import React, { useState } from 'react';
import Section from '../Section';
import { CgMenuRight } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';
import scrollToSection from '@/helpers';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const changeMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <Section className="justify-start flex items-center h-[64px]bg-customLight  w-full z-50">
      <div className=" w-full hidden justify-between md:flex">
        <ul className="flex gap-8 font-semibold text-[20px] ">
          <li className="hover:text-customOrange transition duration-500">
            <button onClick={() => scrollToSection('top')}>Home</button>
          </li>
          <li className="hover:text-customOrange transition duration-500">
            <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
          </li>
          <li className="hover:text-customOrange transition duration-500">
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li className="hover:text-customOrange transition duration-500">
            <button onClick={() => scrollToSection('contact')}>Contact</button>
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
              <button
                onClick={() => {
                  scrollToSection('top');
                  changeMenu();
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('portfolio');
                  changeMenu();
                }}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('about');
                  changeMenu();
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  changeMenu();
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </Section>
  );
};

export default Navbar;
