import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface props {
  className?: string;
  href: string;
  text: string;
}

const DetailsButton: React.FC<props> = ({ className, href, text }) => {
  return (
    <Link
      href={href}
      className={`${className} rounded-lg px-[10px] py-[3px] dark:border-customDWhite border-customDLight border text-center flex items-center justify-center dark:text-customWhite text-customBrown group`}
    >
      {text} <IoIosArrowForward className="group-hover:translate-x-2 transition duration-500" size={18} />
    </Link>
  );
};

export default DetailsButton;
