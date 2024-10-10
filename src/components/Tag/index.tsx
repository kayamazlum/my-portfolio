import React from 'react';

interface tagProps {
  children: string;
}
const Tag: React.FC<tagProps> = ({ children }) => {
  return (
    <span className="px-2 bg-customLight2 dark:bg-customDBrown rounded-xl cursor-pointer transition hover:scale-105">
      {children}
    </span>
  );
};

export default Tag;
