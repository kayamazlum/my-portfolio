import React from 'react';
import Section from '../Section';
import Link from 'next/link';

const Footer = () => {
  return (
    <Section className="">
      <div className="flex flex-col w-full justify-center items-center">
        <div className=" w-full items-center flex flex-col justify-center gap-4 h-[200px]">
          <ul className="flex gap-4 font-semibold text-[20px] text-customBrown2 sm:flex-row ">
            <li className="hover:underline">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="hover:underline">
              <Link href={'/'}>Portfolio</Link>
            </li>
            <li className="hover:underline">
              <Link href={'/'}>About</Link>
            </li>
            <li className="hover:underline">
              <Link href={'/'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-sm font-light text-customBrown2">Copyright 2024. All rights Reserved.</span>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
