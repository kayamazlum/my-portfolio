import React from 'react';
import Button from '../Button';
import SquareArrowIcon from '../SquareArrowIcon';
import Section from '../Section';

const Banner = () => {
  return (
    <Section id="home" className="h-[calc(100vh-64px)] flex bg-customLight items-center ">
      <div className="flex flex-col w-[605px] gap-6 ">
        <div className="bg-customLight2 rounded-[10px] py-2 px-4 text-xl w-[180px] flex justify-center items-center">
          {' '}
          <span className="text-2xl m-0 p-0">👋</span>Hello All
        </div>
        <div className="text-[3rem] sm:text-[4rem] leading-tight font-semibold ">
          I’m Salman Khan,
          <br /> A Creative Designer and Storyteller
        </div>
        <div className="gap-4 flex mt-10 flex-col sm:flex-row md:items-start items-center">
          <Button rightIcon={<SquareArrowIcon />} className={'bg-customBlue text-customWhite '} text="View My Work" />
          <Button className={'bg-customLight '} text="Contact Me" />
        </div>
      </div>
      {/* <div>da</div> */}
    </Section>
  );
};

export default Banner;
