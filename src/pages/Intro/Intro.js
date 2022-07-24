import React, { useState, useEffect } from 'react';
import IntroColumn from './IntroColumn';
import './Intro.scss';

const Intro = () => {
  const [slide, setSlide] = useState(0);
  const [slideValue, setSlideValue] = useState(0);

  const copy = slideValue + 'vw';

  const prev = () => {
    if (slide > 0) {
      setSlide(slide - 1);
      setSlideValue(slideValue + 100);
    }
  };

  const next = () => {
    let slideChild = IMAGES.length;
    if (slide < slideChild - 1) {
      setSlide(slide + 1);
      setSlideValue(slideValue - 100);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideValue === -200
        ? setSlideValue(0)
        : setSlideValue(prev => prev - 100);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [slideValue]);

  return (
    <div className="intro">
      <div className="slide-wrap">
        <div className="slide-items" style={{ left: copy }}>
          {IMAGES.map(({ id, src, alt, content }) => (
            <IntroColumn key={id} src={src} alt={alt} content={content} />
          ))}
          ;
        </div>
        <div className="btn-box">
          <div className="prev" onClick={prev} />
          <div className="next" onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default Intro;

const IMAGES = [
  {
    id: 1,
    src: '/images/slide1.jpg',
    alt: '첫 번째 이미지',
    content: 'SUMMER COMES TO TURULE HOME',
  },
  {
    id: 2,
    src: '/images/slide2.jpg',
    alt: '두 번째 이미지',
    content: 'COZY BEDDING',
  },
  {
    id: 3,
    src: '/images/slide3.jpg',
    alt: '세 번째 이미지',
  },
];
