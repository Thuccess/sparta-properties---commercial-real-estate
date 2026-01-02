
import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  href, 
  children, 
  className,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-corporate-navy text-white hover:bg-corporate-blue',
    secondary: 'bg-corporate-blue text-white hover:bg-corporate-navy',
    outline: 'border border-corporate-navy text-corporate-navy hover:bg-corporate-navy hover:text-white'
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;

