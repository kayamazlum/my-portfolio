'use client';
import Image from 'next/image';
import Button from '@/components//Button';
import Section from '@/components/Section';
import SquareArrowIcon from '@/components//SquareArrowIcon';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();

  return (
    <Section
      id="home"
      wrapperClassName=""
      className="min-h-[calc(100vh-64px)] flex-wrap mt-[64px] flex bg-customLight items-center dark:bg-customDLight dark:text-customDWhite"
    >
      <div className=" w-full flex h-full justify-between">
        <div className="flex flex-col w-[605px] gap-6 ">
          <div className="bg-customLight2 rounded-[10px] py-2 px-4 text-xl w-[180px] flex justify-center items-center dark:bg-customDBrown">
            <span className="text-2xl m-0 p-0 ">👋</span>Selam!
          </div>
          <div className="text-[2.5rem] sm:text-[3.2rem] leading-tight font-semibold ">
            Ben Mazlum, İhtiyaçlarınıza Uygun,
            <br />
            Hızlı ve Etkileyici Web Siteleri Geliştirebilirim.
          </div>
          <div className="gap-4 flex mt-10 flex-col sm:flex-row md:items-start items-center">
            <Button
              onClick={() => router.push('/#portfolio')}
              rightIcon={<SquareArrowIcon />}
              className={'bg-customBlue text-customWhite dark:bg-customDLight2 group'}
              text="Projeler"
            />
            <Button
              onClick={() => router.push('/#contact')}
              className={'bg-customLight dark:bg-customDLight'}
              text="İletişime Geç"
            />
          </div>
        </div>
        <div className=" xl:flex hidden">
          <Image
            src={`/banner.png`}
            alt="sad"
            priority
            width={400}
            height={400}
            className="rounded-[16px] h-full w-full object-contain"
          ></Image>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
