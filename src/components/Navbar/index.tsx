import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='items-center  flex max-w-[1366px] mx-auto pt-[32px]'>
      <div>
        <ul className='flex gap-8 font-semibold text-[20px]'>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>Portfolio</Link></li>
          <li><Link href={"/"}>Contact</Link></li>
          <li><Link href={"/"}>About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
