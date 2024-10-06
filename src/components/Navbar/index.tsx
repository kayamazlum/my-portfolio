'use client';
import scrollToSection from '@/helpers';
import { useState } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import useHamburger from '../../hooks/useHambuger';
import Section from '../Section';

const Navbar = () => {
  const { HamburgerMenuRender, HamburtMenuTrigger } = useHamburger();

  //dark mde
  const [darkMode, setDarkMode] = useState(false);
  const changeModeHandler = () => {
    setDarkMode(!darkMode);
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
        {darkMode ? (
          <MdLightMode size={30} onClick={() => changeModeHandler()} />
        ) : (
          <MdNightlight size={30} onClick={() => changeModeHandler()} />
        )}
      </div>
      <div className="flex md:hidden justify-end w-full">
        <HamburtMenuTrigger />
      </div>

      <HamburgerMenuRender />
    </Section>
  );
};

export default Navbar;
