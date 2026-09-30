import { motion } from 'motion/react';
import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none';
    
    const variants = {
      primary: 'bg-black text-white hover:bg-slate-800 shadow-sm rounded-full cursor-pointer',
      secondary: 'bg-yellow-400 text-slate-950 font-semibold hover:bg-yellow-500 shadow-sm rounded-full cursor-pointer',
      outline: 'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm rounded-full cursor-pointer',
      ghost: 'hover:bg-slate-100 hover:text-slate-900 text-slate-700 rounded-full dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 cursor-pointer',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
