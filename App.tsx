import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './src/components/Utill/ScrollToTop';
import { RecoilRoot } from 'recoil';
import Nav from './src/components/Nav/Nav';
import Footer from './src/components/Footer/Footer';
import { Items } from './src/stores/recoil/items';
import MainPage from './src/pages/Main/MainPage';
import ProductPage from './src/pages/Product/ProductPage';
import ProductDetailPage from './src/pages/ProductDetail/ProductDetailPage';
import CartPage from './src/pages/Cart/CartPage';
import NotFound from './src/pages/NotFound/NotFound';

function App(): React.ReactElement {
  const products = localStorage.getItem('products');
  const [cart, setCart] = useState<Items[]>(products ? JSON.parse(products) : []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <ScrollToTop />
        <Nav cart={cart} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/clothing" element={<ProductPage />} />
          <Route path="/jewelery" element={<ProductPage />} />
          <Route path="/electronics" element={<ProductPage />} />
          <Route
            path="/product/:id"
            element={<ProductDetailPage cart={cart} setCart={setCart} />}
          />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
