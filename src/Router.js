import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './pages/Intro/Intro';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import MainCategory from './pages/MainCategory/MainCategory';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/maincategory" element={<MainCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
