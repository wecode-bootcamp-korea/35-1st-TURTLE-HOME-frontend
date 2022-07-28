import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Nav from './components/Nav/Nav';
import Intro from './pages/Intro/Intro';
import Search from './pages/Search/Search';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import MainCategory from './pages/MainCategory/MainCategory';
import SubCategory from './pages/SubCategory/SubCategory';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/maincategory" element={<MainCategory />} />
        <Route path="/products" element={<SubCategory />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
