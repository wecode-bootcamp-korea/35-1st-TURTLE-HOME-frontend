import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="left-container">
          <FontAwesomeIcon icon={faBars} className="ham-menu" />
          <h1>
            <Link to="/">TURTLE HOME</Link>
          </h1>
        </div>
        <div className="center-container">
          <Link to="/search" className="search-bar">
            <span>검색</span>
            <div className="search-line"></div>
          </Link>
        </div>
        <div className="right-container">
          <Link to="/" className="page-link">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span className="text">로그인</span>
          </Link>
          <Link to="/" className="page-link">
            <FontAwesomeIcon icon={faBagShopping} className="icon" />
            <span className="text">장바구니&nbsp;&nbsp;(0)</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
