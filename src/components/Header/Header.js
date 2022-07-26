import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import './Header.scss';

const Header = () => {
  const [loginWindowBtn, setLoginWindowBtn] = useState(false);
  const [signUpWindowBtn, setSignUpWindowBtn] = useState(false);

  return (
    <>
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
            <div
              className="page-link"
              onClick={() => {
                setLoginWindowBtn(true);
              }}
            >
              <FontAwesomeIcon icon={faUser} className="icon" />
              <span className="text">로그인</span>
            </div>
            <div className="page-link">
              <FontAwesomeIcon icon={faBagShopping} className="icon" />
              <span className="text">장바구니&nbsp;&nbsp;(0)</span>
            </div>
          </div>
        </div>
      </header>
      {loginWindowBtn ? (
        <Login
          setLoginWindowBtn={setLoginWindowBtn}
          setSignUpWindowBtn={setSignUpWindowBtn}
        />
      ) : null}
      {signUpWindowBtn ? (
        <SignUp
          setLoginWindowBtn={setLoginWindowBtn}
          setSignUpWindowBtn={setSignUpWindowBtn}
        />
      ) : null}
    </>
  );
};

export default Header;
