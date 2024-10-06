import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <div className={`w-[90%] max-w-[1366px] mx-auto py-3 flex justify-start ${className}`}>{children}</div>;
};

export default Wrapper;
