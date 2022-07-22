import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './pages/Intro/Intro';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/intro" element={<Intro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
