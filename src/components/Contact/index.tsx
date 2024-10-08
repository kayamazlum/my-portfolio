import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import ContactCard from '../ContactCard';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  return (
    <Section
      id="contact"
      className="bg-customLight2 dark:bg-customDLight2 flex justify-center items-center h-[800px] lg:h-[650px] bg-[url('/bg.png')] dark:bg-[url('/bg2.png')] bg-cover bg-center"
    >
      <div className="flex flex-col w-full ">
        <SectionTitle className="text-center text-customBrown dark:text-customDWhite2">Contact</SectionTitle>
        <div className="w-full flex lg:flex-row gap-8 flex-col justify-around">
          <div className="lg:w-[40%] flex p-8 justify-center items-center ">
            <span className="text-3xl font-medium text-center text-customBrown2 dark:text-customDWhite2">
              Let’s work together and make everything super cute and super useful.
            </span>
          </div>
          <div className="gap-8 flex justify-center items-center flex-col lg:w-[400px]	">
            <ContactCard
              url="mailto:mazlum_work@hotmail.com"
              text="mazlum_work@hotmail.com"
              icon={<SiGmail size={24} />}
            />
            <ContactCard
              url="https://www.linkedin.com/in/mazlum-kaya-2076341aa/"
              text="My LinkedIn Profile"
              icon={<ImLinkedin size={24} />}
            />
            <ContactCard url="https://github.com/kayamazlum" text="My Github Profile" icon={<FaGithub size={30} />} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
