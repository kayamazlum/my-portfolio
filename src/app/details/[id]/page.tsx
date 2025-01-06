'use client';
import Section from '@/components/Section';
import Tag from '@/components/Tag';
import { IProjectItem } from '@/models/projects';
import { getProjectDetailsServices } from '@/services/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { PiArrowElbowRightDownBold } from 'react-icons/pi';
import { Navigation, Pagination, Scrollbar, A11y, Zoom, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import 'swiper/css/mousewheel';
import { appConfig } from '@/config';
import Loading from '@/components/Loading';

interface Props {
  params: {
    id: string;
  };
}

const Details: React.FC<Props> = ({ params }) => {
  const router = useRouter();
  const [project, setProject] = useState<IProjectItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await getProjectDetailsServices(params.id);
        setProject(response.data.selectedProject);
      } catch (error) {
        console.error('Proje detayları alınamadı!', error);
      } finally {
        setLoading(false);
      }
    };
    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  if (loading) {
    return <Loading />;
  }

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <Section className="min-h-[calc(100vh-64px)] flex-wrap mt-[64px] flex bg-customLight dark:bg-customDLight dark:text-customDWhite ">
      <div className="max-w-[700px] sm:w-full md:w-[700px] w-full flex flex-col sm:mt-3 gap-5 mx-auto flex-wrap">
        <span
          className="flex gap-1 text-lg items-center hover:scale-105 font-medium transition justify-start p-1 rounded-xl bg-transparent w-fit cursor-pointer"
          onClick={() => router.back()}
        >
          <IoArrowBackCircleOutline size={28} /> Geri
        </span>

        <div className="max-h-[400px] w-[100%] flex justify-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, Mousewheel, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
            navigation
            zoom={{ maxRatio: 3, minRatio: 1 }}
            mousewheel
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {project?.image_url.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="sm:h-[360px] md:h-[400px] h-[250px] w-full overflow-hidden rounded-[16px] flex justify-center ">
                  <Link href={`${appConfig.baseUrl}${item}`} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={`${appConfig.baseUrl}${item}`}
                      alt="Project Image"
                      width={1900}
                      height={920}
                      className="rounded-[16px] h-full w-full object-cover"
                      priority
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
            {project?.skills.map((skill: string, index: number) => (
              <Tag key={index}>{skill}</Tag>
            ))}
          </div>
          <div className="mt-8">
            <span className="font-semibold">Git Reposu: </span>
            <Link href={project?.git_repo_url || '#'} className="underline underline-offset-2">
              {project?.git_repo_url}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Details;
