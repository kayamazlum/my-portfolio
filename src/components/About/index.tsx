'use client';
import React, { useEffect, useState } from 'react';
import Section from '../Section';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import Tag from '../Tag';
import { useRouter } from 'next/navigation';
import { getAboutServices } from '@/services/about';
import { IAboutItem } from '@/models/projects';

const About = () => {
  const router = useRouter();

  const [about, setAbout] = useState<IAboutItem | null>(null);
  const getData = async () => {
    try {
      const res = await getAboutServices();
      const aboutData = res?.data.aboutData[0] || [];
      setAbout(aboutData || null);
    } catch (error) {
      console.error('Error fetching about data:', error);
      setAbout(null);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [devami, setDevami] = useState(false);
  const changeAboutText = (t: string) => {
    return t.slice(0, 240);
  };

  return (
    <Section
      id="about"
      className="min-h-[calc(100vh)] py-20 flex bg-customLight dark:bg-customDLight justify-center items-center"
    >
      <div className=" lg:w-2/5  flex absolute lg:static justify-center items-center mx-auto right-0 left-0 opacity-20 lg:opacity-100">
        <div className="overflow-hidden rounded-[16px] mx-auto h-auto w-[700px]">
          <Image
            src={`/about.png`}
            alt="sad"
            priority
            width={400}
            height={400}
            className="rounded-[16px] max-h-[400px] max-w-{400px} object-contain"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col lg:w-3/5 w-full text-center sm:text-start dark:text-customDWhite2 z-10">
        <SectionTitle className="mb-4">Hakkımda</SectionTitle>
        <p className="text-2xl">
          {!devami ? changeAboutText(about?.about_text || '') : about?.about_text}
          <span onClick={() => setDevami(!devami)} className="font-semibold cursor-pointer text-2xl">
            {!devami ? '..daha fazla' : '..daha az'}
          </span>
        </p>

        <div className="gap-3 w-full flex flex-wrap mt-8">
          {about?.about_skills.map((item, index) => (
            <Tag key={index}>{item}</Tag>
          ))}
        </div>
        <div className="gap-4 flex mt-10 flex-col sm:flex-row md:items-start items-center">
          <Button
            onClick={() => router.push('/#contact')}
            className={'bg-customLight dark:bg-customDLight2 dark:text-customDWhite2'}
            text="İletişime Geç"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
