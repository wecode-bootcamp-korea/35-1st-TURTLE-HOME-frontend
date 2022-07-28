import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  const [loginWindowBtn, setLoginWindowBtn] = useState(false);
  const [signUpWindowBtn, setSignUpWindowBtn] = useState(false);

  const handleLoginModal = () => {
    setLoginWindowBtn(prev => !prev);
  };

  const handleSignUpModal = () => {
    setSignUpWindowBtn(prev => !prev);
  };

  const loginToken = localStorage.getItem('token');
  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="left-container">
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
            <div
              className={`page-link ${loginToken ? 'display-none' : 'null'}`}
              onClick={handleLoginModal}
            >
              <FontAwesomeIcon icon={faUser} className="icon" />
              <span className="text">로그인</span>
            </div>
            <div className="page-link">
              <FontAwesomeIcon icon={faBagShopping} className="icon" />
              <Link to="/cart">
                <span className="text">장바구니&nbsp;&nbsp;(0)</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {loginWindowBtn ? (
        <Login
          handleLoginModal={handleLoginModal}
          handleSignUpModal={handleSignUpModal}
        />
      ) : null}
      {signUpWindowBtn ? (
        <SignUp
          handleLoginModal={handleLoginModal}
          handleSignUpModal={handleSignUpModal}
        />
      ) : null}
    </>
  );
};

export default Header;
