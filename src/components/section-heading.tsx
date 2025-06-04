// src/components/section-heading.tsx
import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => (
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
    {title}
  </h2>
);

export default SectionHeading;
