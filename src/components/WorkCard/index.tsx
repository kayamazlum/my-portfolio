import projects from '@/Data/projects';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowOutward } from 'react-icons/md';

const WorkCard = () => {
  return (
    <>
      {projects.map((post) => (
        <div
          key={post.id}
          className="flex flex-col bg-customWhite dark:bg-customDLight xl:max-w-[380px] 2xl:w-[90%] xl:w-[85%] lg:w-[90%]  md:w-[98%]  sm:w-[90%] w-[90%] p-3 rounded-[16px] gap-5 justify-between"
        >
          <div className="w-full max-h-[200px] overflow-hidden rounded-[16px] relative group">
            <div className="absolute w-full h-full bg-black opacity-0 z-10 group-hover:opacity-85 transition duration-700 ">
              <Link className="h-full w-full flex items-center justify-center text-white text-lg " href={'/'}>
                <span className="flex p-2 justify-center items-center gap-2 border border-white rounded-[16px] group">
                  Siteye Git <MdArrowOutward size={21} className="opacity-90" />
                </span>
              </Link>
            </div>
            <Image
              src={`${post.imageUrl}`}
              alt="sad"
              priority
              width={400}
              height={208}
              className="rounded-[16px] h-full w-[full] object-cover "
            ></Image>
            <FaExternalLinkAlt
              className="absolute z-20 right-2 top-2 bg-black text-white bg-opacity-30 p-1 rounded-lg"
              size={24}
            />
          </div>
          <div className="h-[160px]">
            <h3 className="font-semibold text-2xl my-4 text-customBrown dark:text-customDWhite2 line-clamp-1">
              {post.title}
            </h3>
            <p className="text-xl  text-customBrown2 dark:text-customDWhite2 line-clamp-4">{post.content}</p>
          </div>
          <div className="flex gap-2 mt-6 items-center justify-end text-lg text-center text-white">
            <Link
              href={'#'}
              className="rounded-lg px-2 dark:border-customDWhite border-customDLight border h-8 flex items-center justify-center w-28 text-customBrown group dark:text-customWhite "
            >
              Detaylar <IoIosArrowForward className="group-hover:translate-x-2 transition duration-500" size={18} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkCard;
