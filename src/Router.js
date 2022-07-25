import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './pages/Intro/Intro';
import Login from './pages/Login/Login';
import SubCategory from './pages/SubCategory/SubCategory';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={<SubCategory />} />
        <Route path="/product/:id" element={<SubCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
