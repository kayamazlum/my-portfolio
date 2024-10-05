import React, { ReactNode } from 'react';
import Wrapper from '../Wrapper';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <div className={className} id={id}>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Section;
