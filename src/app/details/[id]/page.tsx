'use client';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import ProjectsData from '@/Data/projects';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { PiArrowBendRightDownBold, PiArrowElbowRightDownBold } from 'react-icons/pi';

interface Props {
  params: {
    id: string;
  };
}

const Details: React.FC<Props> = ({ params }) => {
  const router = useRouter();

  const [project, setProject] = useState<{ title: string; content: string; imageUrl: string; tec: string[] } | null>(
    null
  );

  useEffect(() => {
    const selectedProject = ProjectsData.find((post) => post.id === params.id);
    setProject(selectedProject || null);
  }, [params.id]);
  if (!project) {
    <div>Loading...</div>;
  }
  return (
    <Section className="min-h-[calc(100vh-64px)] flex-wrap mt-[64px] flex bg-customLight dark:bg-customDLight dark:text-customDWhite ">
      <div className="w-[700px] flex flex-col sm:mt-3 gap-5 mx-auto flex-wrap ">
        <span
          className="flex gap-1 text-lg items-center hover:scale-105 font-medium transition justify-start p-1 rounded-xl bg-transparent w-fit cursor-pointer group"
          onClick={() => router.back()}
        >
          <IoArrowBackCircleOutline size={28} /> Geri Dön
        </span>
        <div className="max-h-[350px] max-w-[700px] overflow-hidden rounded-[16px] ">
          {project && (
            <Image
              src={`${project?.imageUrl}`}
              alt="sad"
              width={700}
              height={350}
              className="rounded-[16px] h-full w-[full] object-cover "
            />
          )}
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col justify-center  rounded-xl">
            <SectionTitle>{project?.title}</SectionTitle>
          </div>
        </div>
        <div className="w-full flex">
          <p className="text-xl">{project?.content}</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-medium flex items-center gap-2">
            Bu Projede Neler Kullandım
            <PiArrowElbowRightDownBold className="mt-2" size={24} />
          </span>
          <div className="flex gap-3 flex-wrap text-sm border-t rounded-xl border-black dark:border-white pt-4">
            {project?.tec.map((item, index) => (
              <Tag key={index}>{item}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Details;
