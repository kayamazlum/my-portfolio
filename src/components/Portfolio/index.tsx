import React from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import WorkCard from '../WorkCard';

const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-customLight2 dark:bg-customDLight2 min-h-[calc(100vh)]">
      <div className="mb-[100px] mt-20 w-full">
        <SectionTitle className="text-center dark:text-customDWhite">Projelerim</SectionTitle>
        <div className="grid gap-y-14 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-x-2 justify-items-center mt-20">
          <WorkCard />
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
