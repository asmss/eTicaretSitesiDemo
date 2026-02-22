import React from 'react'
import Navbar from '../components/navbar';
import ProductList from '../components/product-list';

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-[#0f0a1e] text-white">
            <Navbar />
            <main className="max-w-7xl mx-auto px-6 md:px-12 pt-[120px] pb-12">
                <div className="mb-3 border-b border-white/10 pb-1">
                    <h4 className="text-4xl md:text-6xl font-black tracking-tighter">
                        Ürünler
                    </h4>
                </div>
                <div className="w-full">
                    <ProductList />
                </div>

            </main>
        </div>
    );
}