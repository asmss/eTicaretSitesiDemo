import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/productContext";

export default function Navbar() {
const { sepetProduct } = useContext(ProductContext);
    const totalItems = sepetProduct.length;
    return (
        <nav className="fixed top-0 left-0 w-full h-[80px] z-50 transition-all duration-300 bg-[#0f0a1e]/80 backdrop-blur-lg border-b border-white/10 flex items-center justify-between px-6 md:px-12">

            <div className="flex-shrink-0">
                <h1 className="text-xl md:text-3xl font-mono tracking-widest text-white font-light" style={{fontFamily:"system-ui"}}>
                    E-TİCARET <span className="font-black text-purple-500">SİTESİ</span>
                </h1>
            </div>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="relative text-sm font-semibold text-gray-300 hover:text-white transition-colors group">
                        Anasayfa
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link to="/products" className="relative text-sm font-semibold text-gray-300 hover:text-white transition-colors group">
                        Ürünler
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/contact" className="relative text-sm font-semibold text-gray-300 hover:text-white transition-colors group">
                        İletişim
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                <Link
                    to="/sepet"
                    className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 group active:scale-95 shadow-lg"
                >
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-purple-400 group-hover:text-white transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="absolute -top-3 -right-3 bg-purple-500 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border border-[#0f0a1e] group-hover:bg-white group-hover:text-purple-700">
                            {totalItems}
                        </span>
                    </div>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Sepetim</span>
                </Link>
            </div>
        </nav>
    );
}