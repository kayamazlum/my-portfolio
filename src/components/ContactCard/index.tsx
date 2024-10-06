import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ContactCardProps {
  url: string;
  text: string;
  icon: ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ url, text, icon }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="rounded-3xl p-4 hover:scale-110 duration-500 bg-customWhite bg-opacity-40 flex flex-col items-center justify-center text-xl font-medium gap-2 w-full h-24 border-black border hover:text-customOrange hover:border-customOrange transition"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default ContactCard;
