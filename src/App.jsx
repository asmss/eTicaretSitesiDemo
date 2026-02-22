import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from './pages/homePage'
import ProductPage from './pages/productPage';
import { ProductProvider } from './context/productContext';
import SepetPage from './pages/sepetPage';
import ContactPage from './pages/contactPage';
function App() {

  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sepet" element={<SepetPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  )
}

export default App
