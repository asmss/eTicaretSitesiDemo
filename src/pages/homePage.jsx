import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#0f0a1e] text-white">
            <Navbar />
            <main className="pt-[140px] px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center py-20">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-purple-400 to-purple-800 bg-clip-text text-transparent">
                        Hemen Alışveriş <br /> Yapmaya Başla
                    </h1>   
                    <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
                        E-Ticaret sitemdeki her ürün, fiyat ve görseller temsilidir, portfolio çalışması için hazırlanmış bir demodur
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                            to="/products" 
                            className="px-10 py-4 bg-purple-600 hover:bg-white hover:text-purple-900 font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-purple-500/20"
                        >
                            Ürünleri Keşfet
                        </Link>
                        <Link 
                            to="/contact" 
                            className="px-10 py-4 border border-white/10 hover:bg-white/5 font-bold rounded-2xl transition-all duration-300"
                        >
                            İletişim
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5">
                © 2026 E-Ticaret Sitesi
            </footer>
        </div>
    );
}