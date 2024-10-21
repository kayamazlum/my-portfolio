import React from 'react';

interface tagProps {
  children: string;
  className?: string;
}
const Tag: React.FC<tagProps> = ({ children, className }) => {
  return (
    <span
      className={`px-2 py-[2px] bg-customLight2 dark:bg-customDBrown dark:text-white rounded-xl cursor-pointer transition hover:scale-105 select-none ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
