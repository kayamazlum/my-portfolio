'use client';
import React from 'react';
import Section from '../Section';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  return (
    <Section className="dark:bg-customDLight bg-customLight dark:text-customDWhite2">
      <div className="flex flex-col w-full justify-center items-center">
        <div className=" w-full items-center flex flex-col justify-center gap-4 h-[200px]">
          <ul className="flex gap-4 flex-wrap justify-center font-semibold text-lg  sm:flex-row ">
            <li className="cursor-pointer hover:underline ">
              <span onClick={() => router.push('/')}>Anasayfa</span>
            </li>
            <li className="cursor-pointer hover:underline ">
              <span className="" onClick={() => router.push('/#portfolio')}>
                Projeler
              </span>
            </li>
            <li className="cursor-pointer hover:underline ">
              <span onClick={() => router.push('/#about')}>Hakkımda</span>
            </li>
            <li className="cursor-pointer hover:underline ">
              <span onClick={() => router.push('/#contact')}>İletişim</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-sm font-light ">2024 | Tüm hakları saklıdır.</span>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
