import React from 'react';
import Section from '../Section';

const Loading = () => {
  return (
    <div>
      <Section className="min-h-[calc(100vh-64px)] flex-wrap mt-[64px] flex bg-customLight dark:bg-customDLight dark:text-customDWhite justify-center items-center">
        <div className="text-xl w-full font-medium text-center">Loading...</div>
      </Section>
    </div>
  );
};

export default Loading;
