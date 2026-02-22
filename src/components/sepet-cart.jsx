import React, { useState, useContext } from "react";
import { ProductContext } from "../context/productContext";

export default function SepetCart({ product }) {
    const { removeSepetProduct, addSepetProduct } = useContext(ProductContext);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white/5 backdrop-blur-md p-5 rounded-[2rem] border border-white/10 mb-6 transition-all hover:bg-white/10 hover:border-purple-500/30 group">
            <div className="flex items-center w-full sm:w-auto">
                <div className="w-24 h-24 bg-white/5 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain p-3 transform group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="ml-6">
                    <h4 className="text-lg font-bold text-gray-100 line-clamp-1">
                        {product.title}
                    </h4>
                    <p className="text-sm text-purple-400/60 mt-1 uppercase tracking-tighter">Fiyat: {product.price.toFixed(2)} TL</p>
                    <div className="text-white font-black text-2xl mt-1">
                        {(product.price * product.quantity).toFixed(2)}
                        <span className="text-xs ml-1 text-purple-400 uppercase font-medium">tl</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5 mt-5 sm:mt-0 bg-black/20 p-2 rounded-2xl border border-white/5">
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white font-bold hover:bg-red-500 transition-all active:scale-90"
                    onClick={() => removeSepetProduct(product.id)}
                >
                    <span className="text-xl">−</span>
                </button>
                <span className="text-lg font-black text-white w-6 text-center">
                    {product.quantity}
                </span>
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white font-bold hover:bg-green-600 transition-all active:scale-90"
                    onClick={() => addSepetProduct(product.id)}
                >
                    <span className="text-xl">+</span>
                </button>
            </div>
        </div>
    );
}