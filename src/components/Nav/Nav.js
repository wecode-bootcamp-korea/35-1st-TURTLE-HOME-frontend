import React, { useState } from 'react';
import NavMenuComponent from './NavMenuComponent';
import MAINMENU_DATA from './data/mainMenuData';
import './Nav.scss';

const Nav = () => {
  const [navSlide, setNavSlide] = useState(false);
  const [subMenuOpenKey, setSubMenuOpenKey] = useState('');

  const FOOTERMENU_DATA = [
    '베스트셀러',
    '아웃도어',
    '스윔웨어',
    '펫 컬레션',
    '드레스룸',
    '데일리 리빙',
  ];

  return (
    <>
      <div
        className={navSlide ? 'nav nav-transformer' : 'nav'}
        onMouseOver={() => {
          setNavSlide(true);
        }}
        onMouseLeave={() => {
          setNavSlide(false);
        }}
      >
        <div className="logo-space"></div>
        <div className="nav-container">
          <div className="nav-header">
            <span className="header-copy">TURTLEHOME+</span>
            <span>ABOUT</span>
            <span>CAMPAIGN</span>
            <span>COLLECTION</span>
          </div>
          <div className="nav-main">
            <div className="main-new">
              <span>신상품</span>
              <span>SALE</span>
            </div>

            {MAINMENU_DATA.map((element, i) => {
              return (
                <NavMenuComponent
                  key={i}
                  element={element}
                  index={i}
                  subMenuOpenKey={subMenuOpenKey}
                  setSubMenuOpenKey={setSubMenuOpenKey}
                />
              );
            })}
          </div>

          <div className="nav-footer">
            {FOOTERMENU_DATA.map((element, i) => {
              return (
                <span key={i} className="footer-menus">
                  {element}
                </span>
              );
            })}
            <span className="footer-stories">STORIES</span>
            <span className="info">+INFO</span>
          </div>
        </div>
      </div>

      <i
        class="fa-solid fa-bars"
        onMouseOver={() => {
          setNavSlide(true);
        }}
        onMouseLeave={() => {
          setNavSlide(false);
        }}
      ></i>
    </>
  );
};

export default Nav;
