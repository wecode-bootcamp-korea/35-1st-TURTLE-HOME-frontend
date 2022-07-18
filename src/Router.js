import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Intro from './pages/Intro/Intro';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Intro />}></Route>a
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
