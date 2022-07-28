import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Intro from './pages/Intro/Intro';
import Search from './pages/Search/Search';
import ProductDetail from './pages/ProductDetail/ProductDetail';

import MainCategory from './pages/MainCategory/MainCategory';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/search" element={<Search />} />

        <Route path="/detail" element={<ProductDetail />} />

        <Route path="/maincategory" element={<MainCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
