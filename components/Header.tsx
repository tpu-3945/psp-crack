
import React from 'react';
import { Alert } from './Alert';
import { PspIcon } from './Icons';

export const Header: React.FC = () => {
    return (
        <header className="relative text-center mb-32 pt-12 md:pt-20">
            
            {/* Status Bar */}
            <div className="inline-flex items-center gap-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 mx-auto">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">System Online</span>
                </div>
                <div className="w-px h-3 bg-white/10"></div>
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">v4.20.69 Build</span>
                </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative z-10 mb-10 group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-400/30 transition-colors duration-700"></div>
                <PspIcon className="w-32 h-32 mx-auto text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-float" />
            </div>
            
            {/* Typography */}
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 leading-none select-none">
                PSP <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">ULTIMATE</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-slate-400 font-light leading-relaxed mb-12">
                L'interface définitive pour transformer votre PlayStation Portable en machine de guerre multimédia.
                <span className="block mt-2 text-white font-medium">Émulation • Overclock • Plugins</span>
            </p>

            <div className="max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300">
                <Alert
                    type="warning"
                    message="Modification du firmware = Risques. Suivez le guide pas à pas."
                />
            </div>
        </header>
    );
};
