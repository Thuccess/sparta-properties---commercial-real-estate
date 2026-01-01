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
    <div className={`bg-corporate-navy text-white pt-40 pb-24 relative overflow-hidden ${className}`}>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-corporate-gold/5 -skew-x-12"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {badge && (
            <div className="text-corporate-gold text-[11px] font-bold uppercase tracking-[0.5em] mb-6">
              {badge}
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">{title}</h1>
          {subtitle && (
            <p className="text-xl text-white/50 max-w-2xl font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;

