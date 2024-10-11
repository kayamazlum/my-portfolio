'use client';
import scrollToSection from '@/helpers';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GrClose } from 'react-icons/gr';
import { MdLightMode, MdNightlight } from 'react-icons/md';

interface hamburgerProps {
  hamburger: boolean;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const HamburgerMenu: React.FC<hamburgerProps> = ({ hamburger, setHamburger, darkMode, setDarkMode }) => {
  const router = useRouter();

  return (
    <div>
      <div
        className={`fixed h-screen w-screen left-0 top-0 bg-customLight2 z-50 justify-center flex flex-col bg-gradient-to-r from-customLight2 to-customWhite dark:from-customDLight dark:to-customDLight2 duration-500 transition-all transform ease-out ${
          hamburger ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="justify-center absolute top-8 right-8">
          <GrClose size={32} onClick={() => setHamburger(!hamburger)} />
        </div>
        <ul className="flex flex-col gap-8 font-semibold text-2xl items-center justify-center ">
          <li className="">
            <button
              onClick={() => {
                router.push('/');
                setHamburger(!hamburger);
              }}
            >
              Anasayfa
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection('portfolio');
                setHamburger(!hamburger);
              }}
            >
              Projeler
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection('about');
                setHamburger(!hamburger);
              }}
            >
              Hakkımda
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                scrollToSection('contact');
                setHamburger(!hamburger);
              }}
            >
              İletişim
            </button>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
