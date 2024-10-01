import React from 'react'
import Button from '../Button'

const Banner = () => {
  return (
    <div className='h-[calc(100vh-64px)] flex items-center'>
      <div className='flex flex-col w-[605px] gap-6'>
        <div className='bg-customLight2 rounded-[10px] py-2 px-4 text-xl w-[180px] flex justify-center items-center'> <span className='text-2xl m-0 p-0'>👋</span>Hello All</div>
        <div className='text-[64px] leading-tight font-semibold'>I’m Salman Khan,<br /> A Creative Designer and Storyteller</div>
        <div className='gap-4 flex mt-10'>
          <Button className={'bg-customBlue text-customWhite'}>View My Work</Button>
          <Button className={'bg-customLight'}>Contact Me</Button>
        </div>
      </div>
      <div>
        da
      </div>
    </div>
  )
}

export default Banner
