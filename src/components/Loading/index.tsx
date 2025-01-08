import React from 'react';
import Section from '../Section';
import Image from 'next/image';

const Loading = () => {
  return (
    <div>
      <Section className="min-h-[calc(100vh-64px)] flex-wrap mt-[64px] flex bg-customLight dark:bg-customDLight dark:text-customDWhite justify-center items-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-32 flex flex-col">
            <Image
              src="/loading.gif"
              alt="Loading Gif"
              width={300}
              height={200}
              className="rounded-[16px] h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Loading;
