import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';
import Section from '../Section';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';

const Contact = () => {
  return (
    <Section className="bg-customLight2 flex  justify-center items-center h-[550px] xl:h-[400px] bg-[url('/bg.png')] bg-repeat bg-center">
      <div className="flex flex-col w-full">
        <SectionTitle className="text-center">Contact</SectionTitle>
        <div className="gap-8 flex items-center w-full xl:flex-row flex-col ">
          <Link
            href={'mailto:mazlumwork@hotmail.com'}
            className="rounded-3xl p-4 bg-customWhite bg-opacity-40 flex items-center justify-center text-2xl font-semibold gap-4 w-full h-20 border-black border hover:border-orange-600 transition"
          >
            <IoIosMail size={60} /> <span>email@gmail.com</span>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/mazlum-kaya-2076341aa/'}
            target="_blank"
            className="rounded-3xl p-4 bg-customWhite bg-opacity-40 flex items-center justify-center text-2xl font-semibold gap-4 w-full h-20 border-black border hover:border-orange-600 transition"
          >
            <ImLinkedin size={44} />
            <span>My LinkedIn Profile</span>
          </Link>
          <Link
            href={'https://github.com/kayamazlum'}
            target="_blank"
            className="rounded-3xl p-4 bg-customWhite bg-opacity-40 flex items-center justify-center text-2xl font-semibold gap-4 w-full h-20 border-black border hover:border-orange-600 transition"
          >
            <FaGithub size={50} />
            <span>My Github Profile</span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
