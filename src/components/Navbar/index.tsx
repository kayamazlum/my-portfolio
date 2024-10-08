'use client';
import scrollToSection from '@/helpers';
import { useState, useEffect } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import useHamburger from '@/hooks/useHambuger';
import Section from '@/components/Section';

const Navbar = () => {
  const { HamburgerMenuRender, HamburtMenuTrigger } = useHamburger();

  //dark mode
  const [darkMode, setDarkMode] = useState(true);
  console.log(darkMode);
  // Tarayıcıda localStorage'dan temayı oku
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // const darkModeHandler = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <Section className="justify-start flex items-center h-[64px] bg-customLight w-full z-50 dark:bg-customDLight dark:text-customDWhite">
      <div className=" w-full hidden justify-between md:flex">
        <ul className="flex gap-8 font-semibold text-[20px] ">
          <li className="hover:text-customDOrange transition duration-500">
            <button onClick={() => scrollToSection('top')}>Home</button>
          </li>
          <li className="hover:text-customDOrange transition duration-500">
            <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
          </li>
          <li className="hover:text-customDOrange transition duration-500">
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li className="hover:text-customDOrange transition duration-500">
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
        {darkMode ? (
          <MdLightMode
            className="cursor-pointer hover:text-customDOrange transition duration-500"
            size={30}
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <MdNightlight
            className="cursor-pointer hover:text-customDLight2 transition duration-500"
            size={30}
            onClick={() => setDarkMode(!darkMode)}
          />
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
