
import React from 'react';

interface AlertProps {
  type: 'warning' | 'info';
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const styles = type === 'warning' 
    ? { container: "border-amber-500/30 bg-amber-500/5", icon: "text-amber-500", bar: "bg-amber-500" }
    : { container: "border-cyan-500/30 bg-cyan-500/5", icon: "text-cyan-500", bar: "bg-cyan-500" };

  return (
    <div className={`relative p-4 pl-6 rounded-r-xl border-l-4 border-t border-b border-r ${styles.container} ${styles.bar} backdrop-blur-sm flex gap-4 items-start shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]`}>
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
       
       <div className={`mt-0.5 ${styles.icon}`}>
          {type === 'warning' ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
             </svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
             </svg>
          )}
       </div>
       <div className="text-sm font-medium text-slate-200">
          {message}
       </div>
    </div>
  );
};
