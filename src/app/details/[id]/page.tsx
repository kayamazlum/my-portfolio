'use client';
import Section from '@/components/Section';
import Tag from '@/components/Tag';
import ProjectsData from '@/Data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { PiArrowElbowRightDownBold } from 'react-icons/pi';

interface Props {
  params: {
    id: string;
  };
}

const Details: React.FC<Props> = ({ params }) => {
  const router = useRouter();

  const [project, setProject] = useState<{
    title: string;
    content: string;
    imageUrl: string;
    tec: string[];
    githubUrl: string;
    siteUrl?: string;
  } | null>(null);

  useEffect(() => {
    const selectedProject = ProjectsData.find((post) => post.id === params.id);
    setProject(selectedProject || null);
  }, [params.id]);
  if (!project) {
    <div>Loading...</div>;
  }
  return (
    <Section className="min-h-[calc(100vh-64px)] flex-wrap mt-[64px] flex bg-customLight dark:bg-customDLight dark:text-customDWhite ">
      <div className="w-[700px] flex flex-col sm:mt-3 gap-5 mx-auto flex-wrap">
        <span
          className="flex gap-1 text-lg items-center hover:scale-105 font-medium transition justify-start p-1 rounded-xl bg-transparent w-fit cursor-pointer"
          onClick={() => router.back()}
        >
          <IoArrowBackCircleOutline size={28} /> Geri
        </span>
        <div className="max-h-[350px] max-w-[700px] overflow-hidden rounded-[16px] ">
          {project && (
            <Image
              src={`${project?.imageUrl}`}
              alt="sad"
              width={1900}
              height={920}
              className="rounded-[16px] h-full w-[full] object-cover "
            />
          )}
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col justify-center ">
            <h1 className="sm:text-4xl text-3xl font-semibold">{project?.title}</h1>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <p className="text-xl font-sans leading-8">{project?.content}</p>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <span className="text-xl font-medium flex items-center gap-2 ">
            Bu Projede Neler Kullandım
            <PiArrowElbowRightDownBold className="mt-2" size={24} />
          </span>
          <div className="flex gap-3 flex-wrap text-sm border-t  border-zinc-400 dark:border-zinc-400 pt-6">
            {project?.tec.map((item, index) => (
              <Tag key={index}>{item}</Tag>
            ))}
          </div>
          <div className="mt-8">
            <span className="font-semibold">Git Reposu: </span>
            {project?.githubUrl &&
              project.githubUrl.split(',').map((url, index) => (
                <div key={index} className="mt-2">
                  <Link href={url.trim()} className="underline underline-offset-2">
                    {url.trim()}
                  </Link>
                </div>
              ))}
          </div>
          <div>
            {project?.siteUrl ? (
              project.siteUrl.split(',').map((url, index) => (
                <div key={index} className="mt-2 flex flex-col">
                  <span className="font-semibold">Site Linki: </span>
                  <Link href={url.trim()} className="underline underline-offset-2 mt-1">
                    {url.trim()}
                  </Link>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Details;
