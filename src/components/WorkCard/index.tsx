import projects from '@/Data/projects';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkCard = () => {
  return (
    <>
      {projects.map((post) => (
        <div
          key={post.id}
          className="flex flex-col bg-customWhite dark:bg-customDLight xl:max-w-[380px] 2xl:w-[90%] xl:w-[85%] lg:w-[90%]  md:w-[98%]  sm:w-[90%] w-[90%] p-5 rounded-[16px] gap-5 justify-between"
        >
          <Link href={'#'} className="w-full max-h-[200px] overflow-hidden rounded-[16px]">
            <Image
              src={`${post.imageUrl}`}
              alt="sad"
              priority
              width={400}
              height={208}
              className="rounded-[16px] h-full w-full object-cover  transition-all duration-500 hover:scale-110"
            ></Image>
          </Link>
          <div className="h-[160px]">
            <h3 className="font-semibold text-2xl my-4 text-customBrown dark:text-customDWhite2 line-clamp-1">
              {post.title}
            </h3>
            <p className="text-xl  text-customBrown2 dark:text-customDWhite2 line-clamp-4">{post.content}</p>
          </div>
          <div className="flex gap-2 mt-6 items-center text-lg font-medium text-center text-white">
            <Link
              href={'#'}
              className="rounded-xl px-2 w-20 transition duration-500 hover:scale-105 bg-customDOrange text-black"
            >
              Web
            </Link>
            <Link href={'#'} className="rounded-xl px-2 w-20 transition duration-500 hover:scale-105 bg-customDLight2">
              Github
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkCard;
