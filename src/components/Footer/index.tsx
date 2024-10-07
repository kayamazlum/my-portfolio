'use client';
import React from 'react';
import Section from '../Section';
import scrollToSection from '@/helpers';

const Footer = () => {
  return (
    <Section className="dark:bg-customDLight bg-customLight dark:text-customDWhite2">
      <div className="flex flex-col w-full justify-center items-center">
        <div className=" w-full items-center flex flex-col justify-center gap-4 h-[200px]">
          <ul className="flex gap-4 font-semibold text-[20px]  sm:flex-row ">
            <li className="cursor-pointer hover:underline ">
              <span onClick={() => scrollToSection('top')}>Home</span>
            </li>
            <li className="cursor-pointer hover:underline ">
              <span className="" onClick={() => scrollToSection('portfolio')}>
                Portfolio
              </span>
            </li>
            <li className="cursor-pointer hover:underline ">
              <span onClick={() => scrollToSection('about')}>About</span>
            </li>
            <li className="cursor-pointer hover:underline ">
              <span onClick={() => scrollToSection('contact')}>Contact</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-sm font-light ">Copyright 2024. All rights Reserved.</span>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
