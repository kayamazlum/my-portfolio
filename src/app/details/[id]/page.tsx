'use client';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import Tag from '@/components/Tag';
import ProjectsData from '@/Data/projects';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBackspace } from 'react-icons/fa';

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
      <div className="w-full flex flex-col mt-3">
        <div className="w-full flex gap-4 items-center">
          <div className="max-h-[350px] w-[700px] overflow-hidden rounded-[16px] bg-red-300 ">
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
          <div className="h-full flex flex-col gap-4">
            <span
              className="flex gap-2 text-xl items-center hover:scale-105 font-medium transition justify-center py-1 rounded-xl bg-transparent w-36 cursor-pointer group"
              onClick={() => router.back()}
            >
              <FaBackspace size={20} className=" group-hover:rotate-180 transition" /> Geri Dön
            </span>
            <div className="h-full flex flex-col justify-center border border-customBrown dark:border-customWhite rounded-xl p-4">
              <SectionTitle>{project?.title}</SectionTitle>
              <div className="flex gap-4 flex-wrap">
                {project?.tec.map((item, index) => (
                  <Tag key={index}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex  mt-8">
          <p className="text-xl">{project?.content}</p>
        </div>
      </div>
    </Section>
  );
};

export default Details;
