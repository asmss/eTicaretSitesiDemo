import React from 'react';
import Navbar from '../components/navbar';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#0f0a1e] text-white selection:bg-purple-500/30">
            <Navbar />
            <main className="max-w-7xl mx-auto px-6 pt-[140px] pb-20">
                <div className="text-center mb-20">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent italic">
                        İletişim
                    </h1>
                    <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full shadow-[0_0_20px_rgba(147,51,234,0.6)]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group relative p-10 bg-white/[0.03] backdrop-blur-xl rounded-[3rem] border border-white/5 hover:border-purple-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                        <div>
                            <h3 className="text-purple-500 font-black mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                                <span className="w-8 h-px bg-purple-500/50"></span> E-Posta
                            </h3>
                            <p className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-white transition-colors break-all">
                                asimkarblt@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="group relative p-10 bg-white/[0.03] backdrop-blur-xl rounded-[3rem] border border-white/5 hover:border-blue-500/50 transition-all duration-500 overflow-hidden lg:col-span-1">
                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#0077b5]/10 rounded-full blur-3xl group-hover:bg-[#0077b5]/20 transition-all"></div>
                        <h3 className="text-[#0077b5] font-black mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                            <span className="w-8 h-px bg-[#0077b5]/50"></span> LinkedIn
                        </h3>
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl font-bold text-gray-100">Asım Karabulut</p>
                            <a
                                href="https://www.linkedin.com/in/as%C4%B1m-karabulut-6a874b326/"
                                target="_blank"
                                className="w-full text-center px-6 py-3 bg-[#0077b5] text-white rounded-xl text-sm font-bold hover:bg-white hover:text-[#0077b5] transition-all duration-300"
                            >
                                Profili Görüntüle
                            </a>
                        </div>
                    </div>
                    <div className="group relative p-10 bg-white/[0.03] backdrop-blur-xl rounded-[3rem] border border-white/5 hover:border-purple-500/50 transition-all duration-500 md:col-span-2 lg:col-span-1">
                        <h3 className="text-purple-500 font-black mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
                            <span className="w-8 h-px bg-purple-500/50"></span> Diğer Kanallar
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/asmss"
                                target="_blank"
                                className="flex-1 text-center px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-white hover:text-black transition-all duration-300"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://asimkrblt.live"
                                target="_blank"
                                className="flex-1 text-center px-4 py-3 bg-purple-600/20 border border-purple-500/30 rounded-2xl text-sm font-bold text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                            >
                                Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}