import React from 'react';

interface TitleProps {
 children: string;
 className?: string;
}

const SectionTitle: React.FC<TitleProps> = ({ children, className }) => {
 return <h2 className={`text-[40px] leading-3 font-semibold ${className}`}>{children}</h2>;
};

export default SectionTitle;
