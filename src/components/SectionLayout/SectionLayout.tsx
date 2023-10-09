import React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
}
const SectionLayout = (props: SectionLayoutProps) => (
  <div className="m-5 p-4 shadow-lg rounded-md border">{props.children}</div>
);

export default SectionLayout;