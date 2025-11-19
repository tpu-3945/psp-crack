
import React from 'react';

interface StepCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ title, icon, children, className = "" }) => {
  return (
    <div className={`glass-panel rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] group ${className}`}>
      
      {/* Top Light Border Effect */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

      <div className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
            {icon && (
                <div className="p-2 rounded-lg bg-white/5 text-white group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-50 transition-colors">
                {title}
            </h3>
        </div>
        
        <div className="relative z-10">
            {children}
        </div>
      </div>
    </div>
  );
};
