import React from 'react';

interface TitleProps {
  children?: string;
  className?: string;
}

const SectionTitle: React.FC<TitleProps> = ({ children, className }) => {
  return <h2 className={`sm:text-5xl  text-4xl font-semibold  mb-8 ${className}`}>{children}</h2>;
};

export default SectionTitle;
