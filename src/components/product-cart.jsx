import React, { useContext } from 'react'
import { ProductContext } from '../context/productContext';

export default function ProductCart({ product }) {
  const { addSepetProduct } = useContext(ProductContext);

  return (
    <div className="group bg-purple-800/40 backdrop-blur-sm border border-white/10 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      
      <div className="w-full aspect-square bg-white/5 flex justify-center items-center overflow-hidden group-hover:bg-white/10 transition-colors flex-shrink-0">
        <div className="w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 p-6">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between p-6">
        <div className="mb-6">
          <h4 className="text-sm font-bold text-white mb-3 line-clamp-2 min-h-8 leading-tight">
            {product.title}
          </h4>
          <div className="text-purple-300 text-base font-black">
            {product.price.toFixed(2)} <span className="text-xs ml-1">TL</span>
          </div>
        </div>

        <button
          className="w-full bg-white text-purple-900 font-bold py-2.5 rounded-xl hover:bg-purple-100 transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center gap-2 text-sm"
          onClick={(e) => {
            e.preventDefault();
            addSepetProduct(product.id);
          }}
        >
          <span>Sepete Ekle</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}