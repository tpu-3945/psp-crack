
import React from 'react';
import { Section } from './components/Section';
import { StepCard } from './components/StepCard';
import { CodeBlock } from './components/CodeBlock';
import { Alert } from './components/Alert';
import { Header } from './components/Header';
import {
  PspIcon,
  BatteryIcon,
  MemoryStickIcon,
  UsbCableIcon,
  DownloadIcon,
  FolderIcon,
  PlayIcon,
  SelectIcon,
  CpuIcon,
  ThemeIcon,
  CategoryIcon,
  DateIcon,
  GameIcon,
  FtpIcon
} from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative font-sans text-slate-300">
      {/* Global Background & Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Space Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] transform perspective-[1000px] rotate-x-12 scale-125"></div>
        
        {/* Moving Spotlights */}
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>
        
        {/* CRT Overlay Effect via CSS class in index.html */}
        <div className="scanlines fixed inset-0 opacity-20 pointer-events-none"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-24 max-w-6xl">
        <Header />

        <div className="space-y-40">
          {/* PHASE 1: PRE-FLIGHT */}
          <Section number="01" title="Pré-Requis Système" subtitle="Initialisation du matériel">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-6">
                 <StepCard title="Check-list Matériel" className="h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {[
                          { icon: PspIcon, label: "Console PSP", sub: "1000 / 2000 / 3000 / Go / Street", valid: true },
                          { icon: BatteryIcon, label: "Batterie", sub: "Charge > 70% requise", valid: true },
                          { icon: MemoryStickIcon, label: "Stockage", sub: "MS Pro Duo ou Adaptateur SD", valid: true },
                          { icon: UsbCableIcon, label: "Câble Data", sub: "Mini-USB Standard", valid: true },
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all group cursor-default">
                             <div className="p-3 rounded-lg bg-black/40 text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                                <item.icon className="w-6 h-6" />
                             </div>
                             <div>
                                <div className="font-bold text-white text-sm">{item.label}</div>
                                <div className="text-xs text-slate-500 font-mono">{item.sub}</div>
                             </div>
                             <div className="ml-auto w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
                          </div>
                       ))}
                    </div>
                 </StepCard>
              </div>

              <div className="lg:col-span-5">
                <StepCard title="Firmware Cible" className="h-full border-l-4 border-l-purple-500">
                   <div className="flex flex-col h-full justify-between">
                      <div>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                           Le système ARK-4 doit être injecté sur la version officielle <strong className="text-white">6.61</strong> de Sony.
                        </p>
                        <div className="p-4 rounded-lg bg-black/60 border border-white/10 font-mono text-xs space-y-2 shadow-inner">
                           <div className="flex justify-between">
                              <span className="text-gray-500">SYSTEM_VER CHECK...</span>
                              <span className="text-green-400">OK</span>
                           </div>
                           <div className="flex justify-between border-b border-gray-800 pb-2 mb-2">
                              <span className="text-gray-500">TARGET_VER</span>
                              <span className="text-purple-400 font-bold">6.61 OFW</span>
                           </div>
                           <div className="text-gray-400 pt-1">
                              Si version &lt; 6.61 : <br/>
                              <span className="text-cyan-300">→ Mettre à jour via EBOOT.PBP</span>
                           </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/5 text-center">
                         <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Statut du Noyau</span>
                         <div className="mt-2 h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-gradient-to-r from-green-900 to-green-500 animate-pulse"></div>
                         </div>
                         <span className="text-[10px] text-green-400 mt-1 block">PRÊT POUR INJECTION</span>
                      </div>
                   </div>
                </StepCard>
              </div>
            </div>
          </Section>

          {/* PHASE 2: DEPLOYMENT */}
          <Section number="02" title="Déploiement ARK-4" subtitle="Installation du Custom Firmware" highlight>
             
             {/* MAIN DOWNLOAD CTA */}
             <div className="relative w-full max-w-4xl mx-auto mb-20 group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>
                <div className="relative bg-[#050914] border border-cyan-500/30 rounded-2xl p-1 overflow-hidden">
                   <div className="bg-[#080c1a] rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                      
                      {/* Background Tech Lines */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500 via-transparent to-transparent"></div>

                      <div className="text-center md:text-left space-y-2 relative z-10">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wider mb-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            LATEST RELEASE
                         </div>
                         <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">ARK-4 <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">CFW</span></h3>
                         <p className="text-slate-400 max-w-md">Débloquez le potentiel total. ISOs, Homebrews, Plugins, PS1 Support.</p>
                      </div>

                      <a href="https://github.com/PSP-Archive/ARK-4/releases/latest" target="_blank" rel="noopener noreferrer" className="relative group/btn z-10">
                         <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-30 group-hover/btn:opacity-100 transition duration-200"></div>
                         <button className="relative flex items-center gap-4 px-10 py-5 bg-white text-black rounded-xl font-bold text-lg tracking-wide shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)] hover:bg-cyan-50 hover:scale-[1.02] transition-all active:scale-[0.98]">
                            <DownloadIcon className="w-6 h-6" />
                            <span>TÉLÉCHARGER</span>
                         </button>
                      </a>
                   </div>
                </div>
             </div>

             <div className="space-y-12">
                <StepCard title="Installation des Fichiers" icon={<FolderIcon className="text-yellow-400"/>}>
                   <div className="p-6 bg-black/40 rounded-xl border border-white/5 space-y-6">
                      <Alert type="info" message="Connectez votre PSP en mode USB. L'archive téléchargée contient plusieurs dossiers, nous n'en avons besoin que de deux." />
                      
                      <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                         {/* Source -> Dest 1 */}
                         <div className="relative group p-4 rounded-lg bg-[#0F1117] border border-white/10 hover:border-yellow-500/50 transition-all">
                            <div className="flex items-center justify-between mb-2">
                               <span className="text-yellow-200/70 text-xs uppercase">Source</span>
                               <span className="text-cyan-200/70 text-xs uppercase">Destination PSP</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                               <FolderIcon className="w-5 h-5 text-yellow-400" />
                               <span className="text-white font-bold">ARK_01234</span>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-2"></div>
                            <div className="flex items-center justify-end gap-2 text-right">
                               <span className="text-cyan-400">PSP/SAVEDATA/</span>
                               <FolderIcon className="w-4 h-4 text-cyan-600" />
                            </div>
                         </div>

                         {/* Source -> Dest 2 */}
                         <div className="relative group p-4 rounded-lg bg-[#0F1117] border border-white/10 hover:border-purple-500/50 transition-all">
                            <div className="flex items-center justify-between mb-2">
                               <span className="text-yellow-200/70 text-xs uppercase">Source</span>
                               <span className="text-cyan-200/70 text-xs uppercase">Destination PSP</span>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                               <FolderIcon className="w-5 h-5 text-purple-400" />
                               <span className="text-white font-bold">ARK_Loader</span>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-2"></div>
                            <div className="flex items-center justify-end gap-2 text-right">
                               <span className="text-cyan-400">PSP/GAME/</span>
                               <FolderIcon className="w-4 h-4 text-cyan-600" />
                            </div>
                         </div>
                      </div>
                   </div>
                </StepCard>

                <div className="grid md:grid-cols-2 gap-8">
                   <StepCard title="Lancement (Live)" icon={<PlayIcon className="text-green-400"/>}>
                      <p className="text-slate-400 mb-4">Pour tester sans installation permanente :</p>
                      <ol className="space-y-3 text-sm">
                         <li className="flex items-center gap-3 text-slate-300">
                            <span className="flex-shrink-0 w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs font-mono border border-slate-700">1</span>
                            Aller dans <strong className="text-white">Jeu {'>'} Memory Stick</strong>
                         </li>
                         <li className="flex items-center gap-3 text-slate-300">
                            <span className="flex-shrink-0 w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs font-mono border border-slate-700">2</span>
                            Lancer <strong className="text-cyan-400">ARK Loader</strong>
                         </li>
                      </ol>
                   </StepCard>

                   <StepCard title="Permanent (Infinity)" icon={<CpuIcon className="text-pink-400"/>}>
                      <p className="text-slate-400 mb-4">Pour booter directement sur le CFW :</p>
                      <ol className="space-y-3 text-sm">
                         <li className="flex items-center gap-3 text-slate-300">
                            <span className="flex-shrink-0 w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs font-mono border border-slate-700">1</span>
                            Copier le dossier <CodeBlock>ARK_cIPL</CodeBlock> dans <CodeBlock>PSP/GAME</CodeBlock>
                         </li>
                         <li className="flex items-center gap-3 text-slate-300">
                            <span className="flex-shrink-0 w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-xs font-mono border border-slate-700">2</span>
                            Lancer le flasher depuis la PSP et confirmer l'installation.
                         </li>
                      </ol>
                   </StepCard>
                </div>
             </div>
          </Section>

          {/* PHASE 3: OVERCLOCK */}
          <Section number="03" title="Système Overclock" subtitle="Maximisation des performances">
             <div className="bg-[#0B0E14] rounded-3xl p-1 border border-white/10 relative overflow-hidden">
                {/* Animated Background Gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/20 blur-[100px] rounded-full pointer-events-none"></div>
                
                <div className="bg-[#05070A] rounded-[20px] p-8 md:p-12 relative z-10">
                   <div className="grid md:grid-cols-2 gap-12 items-center">
                      
                      {/* Control Panel */}
                      <div className="space-y-8">
                         <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                               <SelectIcon className="w-6 h-6 text-cyan-500" />
                               VSH Menu Config
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                               Appuyez sur <CodeBlock>SELECT</CodeBlock> sur le menu principal pour ouvrir le menu VSH. Réglez les fréquences pour éliminer les ralentissements dans les jeux lourds (God of War, GTA).
                            </p>
                         </div>
                         
                         <div className="bg-white/5 rounded-xl p-6 border border-white/5 font-mono text-sm space-y-3">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                               <span className="text-gray-500">CPU CLOCK XMB</span>
                               <span className="text-cyan-400">333/166</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                               <span className="text-gray-500">CPU CLOCK GAME</span>
                               <span className="text-pink-500 font-bold drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">333/166</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-gray-500">USB DEVICE</span>
                               <span className="text-white">MEMORY STICK</span>
                            </div>
                         </div>
                      </div>

                      {/* Visualization Dashboard */}
                      <div className="relative">
                         {/* Gauge Container */}
                         <div className="relative aspect-square max-w-[300px] mx-auto">
                            {/* Outer Ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-white/5 border-dashed animate-spin-slow"></div>
                            
                            {/* Inner Circle */}
                            <div className="absolute inset-4 rounded-full bg-[#0F1119] border border-cyan-500/20 flex flex-col items-center justify-center shadow-[0_0_50px_-10px_rgba(6,182,212,0.15)]">
                               <div className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-1">Fréquence</div>
                               <div className="text-5xl font-black text-white tracking-tighter">333</div>
                               <div className="text-slate-500 text-sm font-mono mt-1">MHz</div>
                               
                               {/* Progress Bar */}
                               <div className="w-24 h-1.5 bg-gray-800 rounded-full mt-4 overflow-hidden">
                                  <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse"></div>
                               </div>
                            </div>

                            {/* Decorative Orbitals */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                         </div>
                         
                         <div className="text-center mt-6">
                            <span className="inline-block px-3 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono font-bold">
                                + 50% PERFORMANCE BOOST
                            </span>
                         </div>
                      </div>

                   </div>
                </div>
             </div>
          </Section>

          {/* PHASE 4: PLUGINS */}
          <Section number="04" title="Arsenal de Plugins" subtitle="Extension des fonctionnalités">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                    { 
                      name: "CXMB", 
                      type: "Interface",
                      desc: "Permet l'installation de thèmes .CTF complets modifiant icônes et sons.", 
                      icon: ThemeIcon,
                      color: "text-purple-400",
                      border: "group-hover:border-purple-500/50",
                      bg: "group-hover:bg-purple-500/10"
                    },
                    { 
                      name: "Categories Lite", 
                      type: "Organisation",
                      desc: "Triez vos centaines de jeux dans des dossiers (ISO/Action, ISO/RPG...).", 
                      icon: CategoryIcon,
                      color: "text-blue-400",
                      border: "group-hover:border-blue-500/50",
                      bg: "group-hover:bg-blue-500/10"
                    },
                    { 
                      name: "DayViewer", 
                      type: "Utilitaire",
                      desc: "Affiche le pourcentage précis de batterie et la date complète sur le XMB.", 
                      icon: DateIcon,
                      color: "text-green-400",
                      border: "group-hover:border-green-500/50",
                      bg: "group-hover:bg-green-500/10"
                    }
                 ].map((plugin, i) => (
                    <div key={i} className="group relative h-full">
                       <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
                       <div className={`relative h-full p-6 rounded-2xl bg-[#0c0e14] border border-white/10 transition-all duration-300 ${plugin.border} hover:-translate-y-1`}>
                          <div className="flex items-start justify-between mb-4">
                             <div className={`p-3 rounded-xl bg-white/5 ${plugin.bg} transition-colors`}>
                                <plugin.icon className={`w-6 h-6 ${plugin.color}`} />
                             </div>
                             <span className="text-[10px] font-mono text-slate-500 uppercase border border-white/10 px-2 py-0.5 rounded">{plugin.type}</span>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">{plugin.name}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">{plugin.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
          </Section>

          {/* PHASE 5: GAMES */}
          <Section number="05" title="Bibliothèque de Jeux" subtitle="Gestion des ISOs et EBOOTs">
             <div className="relative p-8 rounded-3xl bg-[#080A10] border border-white/5 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>
                
                <div className="relative z-10 grid md:grid-cols-2 gap-10">
                   <div>
                      <div className="flex items-center gap-3 mb-6">
                         <GameIcon className="w-8 h-8 text-cyan-500" />
                         <h3 className="text-2xl font-bold text-white">Format PSP (.ISO)</h3>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">
                         Les jeux PSP natifs doivent être placés à la racine de la carte mémoire pour être détectés.
                      </p>
                      <div className="bg-[#030406] rounded-lg p-4 border border-gray-800 font-mono text-sm shadow-2xl">
                         <div className="flex items-center gap-2 text-gray-500 mb-2 pb-2 border-b border-gray-800">
                            <MemoryStickIcon className="w-4 h-4" />
                            <span>Memory Stick (Racine)</span>
                         </div>
                         <div className="pl-4 space-y-2">
                            <div className="flex items-center gap-2 text-gray-400">
                               <FolderIcon className="w-4 h-4 text-blue-400" /> PSP
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 bg-white/5 p-1 rounded -mx-1">
                               <FolderIcon className="w-4 h-4 text-yellow-400" /> 
                               <span className="text-yellow-100 font-bold">ISO</span>
                               <span className="text-xs text-gray-600 ml-auto">{'<-- Placer ici'}</span>
                            </div>
                            <div className="pl-6 flex items-center gap-2 text-green-400 text-xs">
                               <span className="opacity-50">└</span> GTA_Vice_City.iso
                            </div>
                         </div>
                      </div>
                   </div>

                   <div>
                      <div className="flex items-center gap-3 mb-6">
                         <PlayIcon className="w-8 h-8 text-purple-500" />
                         <h3 className="text-2xl font-bold text-white">Format PS1 (EBOOT)</h3>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">
                         Les jeux PS1 convertis nécessitent une structure de dossier spécifique.
                      </p>
                      <div className="bg-[#030406] rounded-lg p-4 border border-gray-800 font-mono text-sm shadow-2xl">
                         <div className="flex items-center gap-2 text-gray-500 mb-2 pb-2 border-b border-gray-800">
                            <FolderIcon className="w-4 h-4" />
                            <span>PSP / GAME</span>
                         </div>
                         <div className="pl-4 space-y-2">
                            <div className="flex items-center gap-2 text-gray-400">
                               <FolderIcon className="w-4 h-4 text-purple-400" /> 
                               <span className="text-purple-200">METAL_GEAR_SOLID</span>
                            </div>
                            <div className="pl-6 flex items-center gap-2 text-white text-xs">
                               <span className="opacity-50">└</span> EBOOT.PBP
                            </div>
                            <div className="pl-6 flex items-center gap-2 text-gray-600 text-xs">
                               <span className="opacity-50">└</span> KEYS.BIN
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </Section>

          <footer className="border-t border-white/5 pt-12 pb-8">
             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                   <PspIcon className="w-6 h-6 text-cyan-600" />
                   <span className="font-bold text-white tracking-wider">PSP <span className="text-cyan-500">GUIDE</span></span>
                </div>
                <p className="text-slate-600 text-xs text-center md:text-right max-w-md">
                   Projet éducatif pour la préservation numérique. <br/>
                   L'auteur ne cautionne pas le piratage d'œuvres sous licence.
                </p>
             </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
