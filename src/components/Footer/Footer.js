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
      <hr />
      <div className="footer-info">
        자라홈코리아 유한회사 (Zara Home Korea Ltd.) | 서울시 강남구 영동대로
        511 33층 | 사업자 등록 번호:120-88-16920 | 대표자:Lorena Mosquera |
        연락처:080-500-6445 (수신자 부담 번호) | 연락처:080-500-6445 (수신자
        부담 번호) | 이메일:info.kr@zarahome.com | 호스팅 서비스 제공업체:ITX
        Merken B.V. | 통신판매업신고:2018-서울강남-00458 | 개인정보 보호 정책
      </div>
      <div className="footer-title">
        {FOOTER_ICONS.map(icons => (
          <div className="footer-apps" key={icons.id}>
            <p>{icons.title}</p>
            <div className="footer-iconsbox">
              {icons.data.map(icon => (
                <div className="footer-icons" key={icon.id}>
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="footer-links">
        {FOOTER_LINKS.map(link => (
          <div key={link.id}>
            <p>{link.title}</p>
            {link.data.map(text => (
              <a href="/" key={text.id}>
                {text.text}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_LINKS = [
  {
    id: 1,
    title: '정책',
    data: [
      { id: 1, text: '구매약관' },
      { id: 2, text: '개인정보 보호 정책' },
      { id: 3, text: '쿠키 정책' },
      { id: 4, text: '쿠키 설정' },
    ],
  },
  {
    id: 2,
    title: '회사',
    data: [
      { id: 1, text: '채용 정보' },
      { id: 2, text: '프레스센터' },
    ],
  },
  {
    id: 3,
    title: '연락처',
    data: [
      { id: 1, text: '연락처' },
      { id: 2, text: 'GUEST PURCHASE' },
      { id: 3, text: '매장 찾기' },
      { id: 4, text: '080-500-6445' },
    ],
  },
];

const FOOTER_ICONS = [
  {
    id: 1,
    title: '팔로우 하세요',
    data: [
      { id: 1, icon: <FontAwesomeIcon className="icon" icon={faInstagram} /> },
      { id: 2, icon: <FontAwesomeIcon className="icon" icon={faFacebook} /> },
      { id: 3, icon: <FontAwesomeIcon className="icon" icon={faYoutube} /> },
    ],
  },
  {
    id: 2,
    title: '자라홈 APP 다운로드',
    data: [
      { id: 1, icon: <FontAwesomeIcon className="icon" icon={faApple} /> },
      { id: 2, icon: <FontAwesomeIcon className="icon" icon={faAndroid} /> },
    ],
  },
];
