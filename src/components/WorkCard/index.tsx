import projects from '@/Data/projects';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import DetailsButton from '../DetailsButton';
import Tag from '../Tag';

const data = projects.reverse();

const WorkCard = () => {
  return (
    <>
      {data.slice(0, 3).map((post) => (
        <div
          key={post.id}
          className="flex flex-col bg-customWhite dark:bg-customDLight xl:max-w-[380px] 2xl:w-[90%] xl:w-[85%] lg:w-[90%] md:w-[98%] sm:w-[90%] w-full p-4 rounded-[16px] justify-start "
        >
          <div className="w-full sm:h-[240px] md:h-[200px] h-[200px] overflow-hidden rounded-[16px] relative group ">
            {post.siteUrl !== '' && (
              <div className="absolute w-full h-full bg-black opacity-0 z-10 group-hover:opacity-85 transition duration-700 ">
                <Link
                  className="h-full w-full flex items-center justify-center text-white text-lg "
                  target="_blank"
                  href={'/'}
                >
                  <span className="flex p-2 justify-center items-center gap-2 border border-white rounded-[16px] group">
                    Siteye Git <MdArrowOutward size={21} className="opacity-90" />
                  </span>
                </Link>
              </div>
            )}
            <Image
              src={`${post.imageUrl}`}
              alt="sad"
              priority
              width={600}
              height={300}
              className="rounded-[16px] h-full w-[full] object-cover"
            />
            {post.siteUrl !== '' && (
              <FaExternalLinkAlt
                className="absolute z-20 right-2 top-2 bg-black text-white bg-opacity-30 p-1 rounded-lg cursor-pointer"
                size={24}
              />
            )}
          </div>
          <div className="h-[180px] flex flex-col justify-between mt-4 flex-wrap gap-4 overflow-hidden">
            <div className="">
              <h3 className="font-semibold text-2xl  text-customBrown dark:text-customDWhite2 line-clamp-1">
                {post.title}
              </h3>
              <p className="dark:text-customWhite text-customBrown line-clamp-4 mt-2">{post.summary}</p>
              <div className="gap-[6px] w-full flex flex-wrap mt-4 text-sm ">
                {post.tec.slice(0, 3).map((e, index) => (
                  <Tag key={index} className="text-[13px]">
                    {e}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
          <div className="flex mt-4 items-center justify-end text-lg text-center text-white">
            <DetailsButton href={`/details/${post.id}`} className="" text="Detaylar" />
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkCard;
