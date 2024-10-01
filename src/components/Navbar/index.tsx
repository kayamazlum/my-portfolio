import Link from 'next/link';
import React from 'react';
import Section from '../Section';

const Navbar = () => {
 return (
  <Section className="justify-start flex items-center h-[64px] border-b bg-customLight border-b-gray-300">
   <div>
    <ul className="flex gap-8 font-semibold text-[20px]">
     <li>
      <Link href={'/'}>Home</Link>
     </li>
     <li>
      <Link href={'/'}>Portfolio</Link>
     </li>
     <li>
      <Link href={'/'}>About</Link>
     </li>
     <li>
      <Link href={'/'}>Contact</Link>
     </li>
    </ul>
   </div>
  </Section>
 );
};

export default Navbar;
