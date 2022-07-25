import React from 'react';
import './IntroColumn.scss';

const IntroColumn = ({ src, alt, content }) => {
  return (
    <div className="slide-box">
      <img src={src} alt={alt} />
      <div className="slide-text">{content}</div>
    </div>
  );
};

export default IntroColumn;
