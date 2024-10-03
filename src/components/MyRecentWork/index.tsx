import React from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import WorkCard from '../WorkCard';

const MyRecentWork = () => {
 return (
  <Section className="bg-customLight2">
   <div className="my-[100px] w-full">
    <SectionTitle className="text-center">My Recent Work</SectionTitle>
    <div className="mt-20  grid gap-y-14 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:gap-x-2 justify-items-center ">
     <WorkCard />
    </div>
   </div>
  </Section>
 );
};

export default MyRecentWork;
