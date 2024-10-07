'use client';
import scrollToSection from '@/helpers';
import { GrClose } from 'react-icons/gr';

interface IHamburgerMenue {
  changeMenu: () => void;
}
export const HamburgerMenu = ({ changeMenu }: IHamburgerMenue) => {
  return (
    <div className="fixed h-screen w-screen left-0 top-0 bg-customLight2 z-50 justify-center flex flex-col bg-gradient-to-r from-customLight2 to-customWhite dark:from-customDLight dark:to-customDLight2">
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
  );
};
