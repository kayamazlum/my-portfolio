import React from 'react';

interface tagProps {
  children: string;
}
const Tag: React.FC<tagProps> = ({ children }) => {
  return (
    <span className="px-2 py-[2px] bg-customLight2 dark:bg-customDBrown dark:text-white  rounded-xl cursor-pointer transition hover:scale-105 select-none">
      {children}
    </span>
  );
};

export default Tag;
