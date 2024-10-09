'use client';
import React from 'react';
import Section from '../Section';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import scrollToSection from '@/helpers';

const About = () => {
  return (
    <Section
      id="about"
      className="min-h-[calc(100vh)] py-20 flex bg-customLight dark:bg-customDLight justify-center items-center"
    >
      <div className=" lg:w-2/5  flex absolute lg:static justify-center items-center mx-auto right-0 left-0 opacity-30 lg:opacity-100">
        <div className="overflow-hidden rounded-[16px] mx-auto ">
          <Image
            src={`/about.png`}
            alt="sad"
            priority
            width={400}
            height={400}
            className="rounded-[16px] h-full w-full object-contain"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col lg:w-3/5 w-full text-center sm:text-start dark:text-customDWhite2 z-10">
        <SectionTitle>Hakkımda</SectionTitle>
        <p className="text-2xl ">
          Ben Mazlum Kaya, Türkiye’de yaşıyorum. Kullanıcı deneyimini ön planda tutan, modern ve işlevsel web siteleri
          geliştiriyorum.
        </p>
        <div className="gap-3 w-full flex flex-wrap mt-8">
          <span className="px-2 bg-customLight2 dark:bg-customDBrown rounded-xl cursor-pointer">HTML</span>
          <span className="px-2 bg-customLight2 dark:bg-customDBrown rounded-xl cursor-pointer">CSS</span>
          <span className="px-2 bg-customLight2 dark:bg-customDBrown rounded-xl cursor-pointer">JavaScript</span>
          <span className="px-2 bg-customLight2 dark:bg-customDBrown rounded-xl cursor-pointer">React JS</span>
          <span className="px-2 bg-customLight2 dark:bg-customDBrown rounded-xl cursor-pointer">Next JS</span>
          <span className="px-2 bg-customLight2 dark:bg-customDBrown rounded-xl cursor-pointer">Tailwind CSS</span>
        </div>
        <div className="gap-4 flex mt-10 flex-col sm:flex-row md:items-start items-center">
          <Button
            onClick={() => scrollToSection('contact')}
            className={'bg-customLight dark:bg-customDLight2 dark:text-customDWhite2'}
            text="İletişime Geç"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
