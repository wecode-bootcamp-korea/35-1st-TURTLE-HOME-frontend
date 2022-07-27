import React, { useState, useEffect } from 'react';
import IntroColumn from './IntroColumn';
import './Intro.scss';

const Intro = () => {
  const [numberSlides, setNumberSlide] = useState(0);
  const copy = `${numberSlides * -100}vw`;
  const goPrevImg = () => {
    if (numberSlides > 0) {
      setNumberSlide(numberSlides - 1);
    }
  };

  const goNextImg = () => {
    let slideChild = IMAGES.length;
    if (numberSlides < slideChild - 1) {
      setNumberSlide(numberSlides + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      numberSlides === 2 ? setNumberSlide(0) : setNumberSlide(prev => prev + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [numberSlides]);

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
          <div className="prevSlide" onClick={goPrevImg} />
          <div className="nextSlide" onClick={goNextImg} />
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
