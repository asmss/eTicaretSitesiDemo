import React from 'react';
import Navbar from '../components/navbar';
import SepetList from '../components/sepet-list';

export default function SepetPage() {
    return (
        <div className="min-h-screen bg-[#0f0a1e] bg-gradient-to-b from-[#0f0a1e] to-[#0a0514] text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto pt-[140px] pb-20 px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-4">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                            Sepetiniz
                        </h1>
                    </div>
                </div>

                <div className="w-full">
                    <SepetList />
                </div>

            </main>

            <footer className="py-10 text-center text-gray-600 text-xs tracking-widest uppercase">
                E-Ticaret Sitesi
            </footer>
        </div>
    );
}