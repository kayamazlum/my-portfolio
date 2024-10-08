'use client';
import scrollToSection from '@/helpers';
import { useState, useEffect } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import useHamburger from '@/hooks/useHambuger';
import Section from '@/components/Section';

const Navbar = () => {
  const { HamburgerMenuRender, HamburtMenuTrigger } = useHamburger();

  // Dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Menü görünürlüğü için state
  const [showNavbar, setShowNavbar] = useState(true);

  // Kaydırma yönünü kontrol etmek için önceki scroll pozisyonunu tutarız
  const [lastScrollY, setLastScrollY] = useState(0);

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

  // Scroll event'i ile menüyü gizle/göster
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Sayfa aşağı kaydırılıyor, menüyü gizle
        setShowNavbar(false);
      } else {
        // Sayfa yukarı kaydırılıyor, menüyü göster
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Temizlik işlemi
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Section
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-customLight dark:bg-customDLight dark:text-customDWhite flex items-center h-[64px]`}
    >
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
