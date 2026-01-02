
import React from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'slate' | 'navy';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className,
  background = 'white'
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    slate: 'bg-corporate-slate',
    navy: 'bg-corporate-navy'
  };

  return (
    <section className={cn(backgroundClasses[background], className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

