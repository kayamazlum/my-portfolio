import React from 'react';
import Section from '../Section';
import Button from '../Button';
import SectionTitle from '../SectionTitle';

const About = () => {
  return (
    <Section className="min-h-[calc(100vh)] py-20 flex bg-customLight ">
      <div className="flex flex-col w-[605px] text-center sm:text-start ">
        <SectionTitle>A Little Bit About Me</SectionTitle>
        <p className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae culpa animi doloremque consequatur tempora!
          Officiis necessitatibus voluptatum distinctio debitis non vel neque totam modi nobis ea ratione suscipit
          iusto, illo labore vitae laborum quas perspiciatis repudiandae atque asperiores. Dolore porro dicta
          repudiandae, earum aliquid vero quam quis, magni laborum expedita, doloremque esse. Perspiciatis, repellendus
          consequatur. Neque, aut. Commodi voluptas delectus inventore ullam neque odit reiciendis nihil ducimus quaerat
          fugit debitis quibusdam sit, vero ipsum assumenda velit repudiandae est esse ratione!
        </p>
        <div className="gap-4 flex mt-10 flex-col sm:flex-row md:items-start items-center">
          <Button className={'bg-customLight '} text="Contact Me" />
        </div>
      </div>
      {/* <div>da</div> */}
    </Section>
  );
};

export default About;
