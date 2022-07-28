import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Nav from './components/Nav/Nav';
import Intro from './pages/Intro/Intro';
import Search from './pages/Search/Search';
import MainCategory from './pages/MainCategory/MainCategory';
import SubCategory from './pages/SubCategory/SubCategory';
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
        <Route path="/maincategory" element={<MainCategory />} />
        <Route path="/products" element={<SubCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
