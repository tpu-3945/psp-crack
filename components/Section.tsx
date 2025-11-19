
import React from 'react';

interface SectionProps {
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  highlight?: boolean;
}

export const Section: React.FC<SectionProps> = ({ number, title, subtitle, children, highlight }) => {
  return (
    <section className="relative group isolate">
      
      {/* Connecting Beam (Left Side) */}
      <div className="hidden lg:block absolute left-[3.25rem] top-20 bottom-[-2.5rem] w-px bg-gradient-to-b from-cyan-900/0 via-cyan-500/20 to-cyan-900/0 z-0 group-hover:via-cyan-500/50 transition-colors duration-1000"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10">
        
        {/* Number/Status Column */}
        <div className="hidden lg:flex flex-col items-center sticky top-24 h-fit z-10">
           <div className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center border bg-[#05070a] relative overflow-hidden transition-all duration-500 ${highlight ? 'border-cyan-500/50 shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]' : 'border-white/10 group-hover:border-white/30'}`}>
              
              {/* Inner Glint */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <span className={`text-3xl font-black font-mono ${highlight ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-200'}`}>
                 {number}
              </span>
              <div className="h-0.5 w-8 bg-current opacity-20 mt-2 rounded-full"></div>
           </div>
           
           {/* Status Dot */}
           <div className="mt-4 w-3 h-3 rounded-full bg-[#05070a] border border-white/20 flex items-center justify-center">
              <div className={`w-1.5 h-1.5 rounded-full ${highlight ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`}></div>
           </div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col">
           <header className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                 <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase">Phase {number}</span>
                 <div className="h-px flex-grow bg-gradient-to-r from-cyan-900/50 to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">{title}</h2>
              {subtitle && <p className="text-slate-400 text-lg font-light">{subtitle}</p>}
           </header>
           
           <div className="relative">
              {children}
           </div>
        </div>

      </div>
    </section>
  );
};
