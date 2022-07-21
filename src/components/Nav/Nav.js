import React, { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [navSlide, setNavSlide] = useState(false);

  const mainMenuData = [
    {
      name: '침실',
      category: [
        '침구',
        '충전재',
        '차렵이불',
        '홑이불',
        '담요',
        '쿠션커버',
        '커튼',
        '러그',
      ],
    },
    {
      name: '의류 & 슈즈',
      category: [
        '의류',
        '슈즈',
        '백 & 토일렛백',
        '엑세서리 & 행거',
        '세탁 관리',
        '드레스룸',
      ],
    },
    {
      name: '거실',
      category: [
        '가구',
        '러그',
        '거울',
        '커튼',
        '바스켓',
        '쿠션커버',
        '쿠션충전재',
        '토퍼 & 소파커버',
      ],
    },
    {
      name: '주방',
      category: [
        '테이블웨어 & 조리도구',
        '스토리지',
        '행주 & 앞치마',
        '주방 액세사리',
        '가구',
      ],
    },
    {
      name: '다이닝',
      category: [
        '식기',
        '글라스웨어',
        '커트러리',
        '테이블보 & 냅킨',
        '트레이',
        '테이블 액세서리',
        '가구',
      ],
    },
    {
      name: '욕실',
      category: [
        '베이직 타월',
        '타월',
        '목욕 가운',
        '욕실 매트',
        '가구',
        '바스켓',
        '욕실용품 세트',
        '샤워 커튼',
      ],
    },
    {
      name: '디퓨저 & 캔들',
      category: ['제품별'],
    },
    {
      name: '키즈',
      category: ['신상품', 'NEW BORN', '비치', 'PEANUTS'],
    },
  ];
  const footerMenuData = [
    '베스트셀러',
    '아웃도어',
    '스윔웨어',
    '펫 컬레션',
    '드레스룸',
    '데일리 리빙',
  ];

  return (
    <div
      className={navSlide ? 'nav nav-transformer' : 'nav'}
      onMouseOver={() => {
        setNavSlide(true);
      }}
      onMouseLeave={() => {
        setNavSlide(false);
      }}
    >
      <div className="nav-header">
        <span className="header-copy">ZARAHOME+</span>
        <span>ABOUT</span>
        <span>CAMPAIGN</span>
        <span>COLLECTION</span>
      </div>
      <div className="nav-main">
        <div className="main-new">
          <span>신상품</span>
          <span>SALE</span>
        </div>
        {mainMenuData.map((element, i) => {
          return (
            <span
              key={i}
              className="main-menus"
              onClick={() => {
                return element.category;
              }}
            >
              {element.name}
            </span>
          );
        })}
      </div>
      <div className="nav-footer">
        {footerMenuData.map((element, i) => {
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
  );
};

export default Nav;
