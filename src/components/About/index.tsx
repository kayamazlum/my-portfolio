'use client';
import React, { useState } from 'react';
import Section from '../Section';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import Tag from '../Tag';
import AboutSkills from '@/Data/aboutSkills';
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();

  const aboutText: string =
    'Merhaba, ben Mazlum KAYA. Bilişim teknolojilerine küçük yaşlardan beri olan ilgim, lisede Bilişim Teknolojileri-Web Tasarım ve Programlama bölümünü tercih etmemi sağladı.Bu alandaki eğitimimi ilerleterek, üniversitede Yönetim Bilişim Sistemleri bölümünden mezun oldum. Şu anda Frontend teknolojileri (React JS, NextJS) üzerine çalışıyorum. Kullanıcı deneyimini ön planda tutan, modern ve işlevsel web siteleri geliştiriyorum.';

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
          {!devami ? changeAboutText(aboutText) : aboutText}
          <span onClick={() => setDevami(!devami)} className="font-semibold cursor-pointer text-2xl">
            {!devami ? '..daha fazla' : '..daha az'}
          </span>
        </p>

        <div className="gap-3 w-full flex flex-wrap mt-8">
          {AboutSkills.map((item) => (
            <Tag key={item.id}>{item.text}</Tag>
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
