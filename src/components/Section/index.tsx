import React, { ReactNode } from 'react';
import Wrapper from '@/components/Wrapper';

interface SectionProps {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, wrapperClassName, id }) => {
  return (
    <div className={className} id={id}>
      <Wrapper className={wrapperClassName}>{children}</Wrapper>
    </div>
  );
};

export default Section;
