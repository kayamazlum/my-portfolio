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
      <div className="flex flex-col lg:w-3/5 w-full text-center sm:text-start ">
        <SectionTitle className="dark:text-customDWhite2">A Little Bit About Me</SectionTitle>
        <p className="text-2xl dark:text-customDWhite2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae culpa animi doloremque consequatur tempora!
          Officiis necessitatibus voluptatum distinctio debitis non vel neque totam modi nobis ea ratione suscipit
          iusto, illo labore vitae laborum quas perspiciatis repudiandae atque asperiores. Dolore porro dicta
          repudiandae, earum aliquid vero quam quis, magni laborum expedita, doloremque esse.
        </p>
        <div className="gap-4 flex mt-10 flex-col sm:flex-row md:items-start items-center">
          <Button
            onClick={() => scrollToSection('contact')}
            className={'bg-customLight dark:bg-customDLight2 dark:text-customDWhite2'}
            text="Contact Me"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
