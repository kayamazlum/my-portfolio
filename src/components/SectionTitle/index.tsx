import React from 'react';

interface TitleProps {
 children: string;
}

const SectionTitle: React.FC<TitleProps> = ({ children }) => {
 return <h2 className="text-4xl font-semibold">{children}</h2>;
};

export default SectionTitle;
