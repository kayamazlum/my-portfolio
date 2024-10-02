import React from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import WorkCard from '../WorkCard';

const MyRecentWork = () => {
 return (
  <Section className="bg-customLight2">
   <div className="my-[100px] w-full">
    <SectionTitle>My Recent Work</SectionTitle>
    <div className="mt-20 grid-cols-3 grid gap-y-14 gap-x-4 justify-between">
     <WorkCard />
    </div>
   </div>
  </Section>
 );
};

export default MyRecentWork;
