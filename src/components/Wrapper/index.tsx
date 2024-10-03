import React, { ReactNode } from 'react';

interface WrapperProps {
 children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
 return <div className="w-[90%] max-w-[1366px] mx-auto flex justify-start">{children}</div>;
};

export default Wrapper;
