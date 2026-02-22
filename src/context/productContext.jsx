import React, { useState, useContext, createContext ,useEffect} from "react";
import Product from "../interfaces/product";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        new Product(1, "Fenerbahçe Atkısı", 299.99, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWtYRA5Ea6ICj5Wmqg_yj4OCV7rv8fE07vw&s", 1),
        new Product(2, "2010-11 Süper Lig Kupası", 1599.90, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgLHzUjm8uaY9te_19QDmL4jYBjCkggKRrA&s", 1),
        new Product(3, "Fenerbahçe Bileklik", 199.99, "https://cdn.dsmcdn.com/mnresize/420/620/ty397/product/media/images/20220413/21/90479090/369805085/1/1_org_zoom.jpg", 1),
        new Product(4, "2025-26 Deplasman Forması", 2999.90, "https://media.fenerium.com/Fenerium/media/images/urunler/AT013EFS02500.jpg", 1),
        new Product(5, "2025-26 İç Saha Forması", 3299.99, "https://aad216.a-cdn.akinoncloud.com/products/2025/07/02/29799509/6464b6be-8e54-4e15-9416-839605fb1e77_size625x921_cropCenter.jpg", 1),
        new Product(6, "Taze Hamsi", 130.00, "https://61saatcom.teimg.com/crop/1280x720/61saat-com/wp/uploads/2023/11/balik-ye-hamsi-ici-temizlenmis-500-gr-02f710.jpg", 1),
    ])
    const [sepetProduct, setSepetProduct] = useState(() => {
        const localData = localStorage.getItem("sepetim");
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem("sepetim", JSON.stringify(sepetProduct));
    }, [sepetProduct]);


    const addProduct = (product) => {
        setProducts([...products, product]);
    }
    const addSepetProduct = (id) => {
        const existingItem = sepetProduct.find(p => p.id === id);

        if (existingItem) {
            const updatedSepet = sepetProduct.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setSepetProduct(updatedSepet);
        } else {
            const productToAdd = products.find(p => p.id === id);
            if (productToAdd) {
                setSepetProduct([...sepetProduct, { ...productToAdd, quantity: 1 }]);
            }
        }
    };
    const removeSepetProduct = (id) => {
        const product = sepetProduct.find(p => p.id === id);
        if (product !== undefined) {
            if (product.quantity > 1) {
                setSepetProduct(sepetProduct.map(p =>
                    p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                ));
            } else {
                setSepetProduct(sepetProduct.filter(p => p.id !== id));
            }
        }
    }

    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
            addProduct,
            addSepetProduct,
            removeSepetProduct,
            sepetProduct,
            setSepetProduct
        }}>

            {children}
        </ProductContext.Provider>
    );

}