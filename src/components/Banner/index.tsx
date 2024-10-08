'use client';
import scrollToSection from '@/helpers';
import Image from 'next/image';
import Button from '@/components//Button';
import Section from '@/components/Section';
import SquareArrowIcon from '@/components//SquareArrowIcon';

const Banner = () => {
  return (
    <Section
      id="home"
      wrapperClassName=""
      className="h-[calc(100vh)] flex bg-customLight items-center dark:bg-customDLight dark:text-customDWhite"
    >
      <div className=" w-full flex h-full justify-between">
        <div className="flex flex-col w-[605px] gap-6 ">
          <div className="bg-customLight2 rounded-[10px] py-2 px-4 text-xl w-[180px] flex justify-center items-center dark:bg-customDBrown">
            {' '}
            <span className="text-2xl m-0 p-0 ">👋</span>Hello All
          </div>
          <div className="text-[3rem] sm:text-[4rem] leading-tight font-semibold ">
            I’m Mazlum ,
            <br /> A Creative Designer and Storyteller
          </div>
          <div className="gap-4 flex mt-10 flex-col sm:flex-row md:items-start items-center">
            <Button
              onClick={() => scrollToSection('portfolio')}
              rightIcon={<SquareArrowIcon />}
              className={'bg-customBlue text-customWhite dark:bg-customDLight2'}
              text="View My Work"
            />
            <Button
              onClick={() => scrollToSection('contact')}
              className={'bg-customLight dark:bg-customDLight'}
              text="Contact Me"
            />
          </div>
        </div>
        <div className=" xl:flex hidden">
          <Image
            src={`/banner.png`}
            alt="sad"
            priority
            width={400}
            height={400}
            className="rounded-[16px] h-full w-full object-contain"
          ></Image>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
