import React, { ReactNode } from 'react';
import Wrapper from '../Wrapper';

interface SectionProps {
 children: ReactNode;
 className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
 return (
  <div className={className}>
   <Wrapper>{children}</Wrapper>
  </div>
 );
};

export default Section;
