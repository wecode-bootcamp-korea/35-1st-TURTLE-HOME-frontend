import React, { useState, useEffect } from 'react';
import IntroColumn from './IntroColumn';
import './Intro.scss';

const Intro = () => {
  const [slide, setSlide] = useState(0);
  const [slideValue, setSlideValue] = useState(0);

  const copy = slideValue + 'vw';
  //width값은 vw로 나와야 하는데 여기서 단위를 추가해 준다.

  const prev = () => {
    if (slide > 0) {
      setSlide(slide - 1);
      setSlideValue(slideValue + 100);
      //슬라이드의 width 값은 300인데 보여지는 슬라이드 값은 100이므로 +100씩 (200, 300) 추가가 되어 다음 이미지가 보여진다.
    }
  };
  const next = () => {
    let slideChild = IMAGES.length;
    if (slide < slideChild - 1) {
      setSlide(slide + 1);
      setSlideValue(slideValue - 100);
      //위와 반대로 실행됨. 분명히 코드를 줄일 수 있을 것 같은데 효과적으로~ 깔끔하게~  줄일 수 있는 방법이 있지 않을까
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
          <IntroColumn />
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
  { id: 1, src: '/images/bedroom.jpeg', alt: '첫 번째 이미지' },
  { id: 2, src: '/images/bed.jpeg', alt: '두 번째 이미지' },
  { id: 3, src: '/images/cat.jpeg', alt: '세 번째 이미지' },
];
