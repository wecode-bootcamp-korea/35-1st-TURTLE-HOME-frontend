import React from 'react';
import './IntroColumn.scss';
const IntroColumn = () => {
  return (
    <div className="slide-img">
      {IMAGES.map(img => {
        const { id, src, alt, content } = img;
        return (
          <div key={id}>
            <img src={src} alt={alt} />
            <div className="text">{content}</div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default IntroColumn;
const IMAGES = [
  {
    id: 1,
    src: '/images/slide1.jpg',
    alt: '첫 번째 이미지',
  },
  {
    id: 2,
    src: '/images/slide2.jpg',
    alt: '두 번째 이미지',
    content: 'SUMMER COMES TO TURULE HOME',
  },
  { id: 3, src: '/images/slide3.jpg', alt: '세 번째 이미지' },
];
