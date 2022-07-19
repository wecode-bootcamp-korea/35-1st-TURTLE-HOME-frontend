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
          <Link to="/" className="login-link">
            <FontAwesomeIcon icon={faUser} />
            <span className="text">로그인</span>
          </Link>
          <Link to="/" className="basket-link">
            <FontAwesomeIcon icon={faBagShopping} />
            <span className="text">장바구니</span>
            <span>(</span>
            <span className="basket-count">0</span>
            <span>)</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
