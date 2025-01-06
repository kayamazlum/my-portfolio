import React, { ReactNode } from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import DetailsButton from '../DetailsButton';

interface IPortfolioProps {
  title: string;
  children: ReactNode;
}

const Portfolio = ({ title, children }: IPortfolioProps) => {
  return (
    <Section id="portfolio" className="bg-customLight2 dark:bg-customDLight2 min-h-[calc(100vh)]">
      <div className="mb-10 mt-16 w-full flex flex-col">
        <SectionTitle className="text-center dark:text-customDWhite">{title}</SectionTitle>
        <div className="grid gap-y-14 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-x-2 justify-items-center mt-20">
          {children}
        </div>
        <div className="flex justify-center items-center mt-12">
          <DetailsButton href="/allProject" className="h-14 w-52 font-semibold" text="Daha Fazla" />
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
