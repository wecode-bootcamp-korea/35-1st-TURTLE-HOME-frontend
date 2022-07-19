import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faAndroid,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <hr />
        <div className="footer-info">
          <span>
            자라홈코리아 유한회사 (Zara Home Korea Ltd.) | 서울시 강남구
            영동대로 511 33층 | 사업자 등록 번호:120-88-16920 | 대표자:Lorena
            Mosquera | 연락처:080-500-6445 (수신자 부담 번호) |
            연락처:080-500-6445 (수신자 부담 번호) | 이메일:info.kr@zarahome.com
            | 호스팅 서비스 제공업체:ITX Merken B.V. |
            통신판매업신고:2018-서울강남-00458 | 개인정보 보호 정책
          </span>
        </div>
        <div className="footer-icons">
          <div className="footer-follow">
            <p>팔로우 하세요</p>
            <span>
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              <FontAwesomeIcon className="icon" icon={faYoutube} />
            </span>
          </div>
          <div className="footer-apps">
            <p>자라홈 APP 다운로드</p>
            <span>
              <FontAwesomeIcon className="icon" icon={faApple} />
              <FontAwesomeIcon className="icon" icon={faAndroid} />
            </span>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <p>정책</p>
            <a href="/">구매 약관</a>
            <a href="/">개인정보 보호 정책</a>
            <a href="/">쿠키 정책</a>
            <a href="/">쿠키 설정</a>
          </div>
          <div>
            <p>회사</p>
            <a href="/">채용 정보</a>
            <a href="/">프레스센터</a>
          </div>
          <div>
            <p>연락처</p>
            <a href="/">연락처</a>
            <a href="/">GUEST PURCHASE</a>
            <a href="/">매장 찾기</a>
            <a href="/">080-500-6445</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
