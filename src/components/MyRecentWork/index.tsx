import React from 'react';
import Section from '../Section';
import SectionTitle from '../SectionTitle';
import WorkCard from '../WorkCard';

const MyRecentWork = () => {
 return (
  <Section className="bg-customLight2">
   <div className="my-[100px] w-full">
    <SectionTitle>My Recent Work</SectionTitle>
    <div>
     <WorkCard />
    </div>
   </div>
  </Section>
 );
};

export default MyRecentWork;
