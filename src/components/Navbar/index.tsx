'use client';
import scrollToSection from '@/helpers';
import { useState, useEffect } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import Section from '@/components/Section';
import { CgMenuRight } from 'react-icons/cg';
import HamburgerMenu from '../HamburgerMenu';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  // Sayfa yüklendiğinde kaydedilen temayı kullan
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Tema değiştirme efekti
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

  const router = useRouter();
  return (
    <Section
      className={`fixed top-0  left-0 w-full z-50 transition-transform duration-500 bg-customLight dark:bg-customDLight dark:text-customDWhite flex items-center h-[64px] `}
    >
      <div className=" w-full hidden justify-between md:flex">
        <ul className="flex gap-8 font-semibold text-[20px] ">
          <li className="hover:text-customDOrange transition duration-500">
            <button onClick={() => router.push('/')}>Anasayfa</button>
          </li>
          <li className="hover:text-customDOrange transition duration-500 ">
            <button onClick={() => scrollToSection('portfolio')}>Projeler</button>
          </li>
          <li className="hover:text-customDOrange transition duration-500">
            <button onClick={() => scrollToSection('about')}>Hakkımda</button>
          </li>
          <li className="hover:text-customDOrange transition duration-500">
            <button onClick={() => scrollToSection('contact')}>İletişim</button>
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
        <CgMenuRight size={40} onClick={() => setHamburger(!hamburger)} />
      </div>
      {hamburger ? (
        <HamburgerMenu
          hamburger={hamburger}
          setHamburger={setHamburger}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      ) : (
        <></>
      )}
    </Section>
  );
};

export default Navbar;
