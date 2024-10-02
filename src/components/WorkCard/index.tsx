import data from '@/Data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkCard = () => {
 return (
  <>
   {data.map((post) => (
    <div key={post.id} className="flex flex-col bg-customLight w-[25rem] p-5 rounded-[16px] gap-5 justify-between">
     <Link href={''} className="w-full h-[13rem] overflow-hidden">
      <Image
       src={`${post.imageUrl}`}
       alt="sad"
       priority
       width={400}
       height={208}
       className="w-[25rem] h-[13rem] rounded-[16px] object-cover"
      ></Image>
     </Link>
     <div className="h-[160px]">
      <h3 className="font-semibold text-2xl my-4 text-customBrown line-clamp-1">{post.title}</h3>
      <p className="text-xl  text-customBrown2 line-clamp-4">{post.content}</p>
     </div>
     <div className="flex justify-between mt-6 ">
      <Link href={''}>
       <span className="text-xl font-medium text-customBlue">View Case Study</span>
      </Link>
      <span>02/10/2024</span>
     </div>
    </div>
   ))}
  </>
 );
};

export default WorkCard;
