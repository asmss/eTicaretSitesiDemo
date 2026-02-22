import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";
import ProductCart from "./product-cart";

export default function ProductList() {
    const { products } = useContext(ProductContext);

    return (
        <div className="w-full">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCart key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}