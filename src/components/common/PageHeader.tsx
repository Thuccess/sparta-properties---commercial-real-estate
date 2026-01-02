import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  badge,
  className = ''
}) => {
  return (
    <div className={`bg-corporate-navy text-white pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-24 relative overflow-hidden ${className}`}>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-corporate-blue/5 -skew-x-12"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {badge && (
            <div className="text-corporate-blue text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 sm:mb-6">
              {badge}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6">{title}</h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;

