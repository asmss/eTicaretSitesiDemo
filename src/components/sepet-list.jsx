import React, { useState, useContext } from 'react'
import { ProductContext } from '../context/productContext'
import SepetCart from './sepet-cart';
import {Link} from "react-router-dom";

export default function SepetList() {
    const { sepetProduct } = useContext(ProductContext);

    const totalPrice = sepetProduct.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    if (sepetProduct.length === 0) {
        return (
            <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
                <div className="text-5xl mb-6 opacity-30">🛒</div>
                <Link to="/products" className="relative text-sm font-bold text-gray-300 hover:text-white transition-colors group">
                    Alışverişe Başla
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                {sepetProduct.map((product) => (
                    <SepetCart key={product.id} product={product} />
                ))}
            </div>

            <div className="lg:col-span-1">
                <div className="sticky top-[140px] bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white/10">
                    <h4 className="text-2xl font-black text-white mb-8 tracking-tighter uppercase">Sipariş Özeti</h4>

                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center text-gray-400">
                            <span className="text-sm font-medium">Ara Toplam</span>
                            <span className="font-bold text-gray-200">{totalPrice.toFixed(2)} TL</span>
                        </div>
                    </div>

                    <div className="h-px bg-white/10 mb-8" />

                    <div className="flex justify-between items-end mb-10">
                        <span className="text-gray-100 font-bold text-lg">Toplam</span>
                        <div className="text-right">
                            <p className="text-4xl font-black text-white">
                                {totalPrice.toFixed(2)} <span className="text-sm text-purple-400">TL</span>
                            </p>
                        </div>
                    </div>

                    <button className="w-full bg-purple-600 hover:bg-white hover:text-purple-900 text-white font-bold py-5 rounded-[1.5rem] transition-all duration-300 transform active:scale-95 shadow-[0_10px_30px_-10px_rgba(147,51,234,0.5)]">
                        Ödeme Adımına Geç
                    </button>
                </div>
            </div>
        </div>
    );
}


