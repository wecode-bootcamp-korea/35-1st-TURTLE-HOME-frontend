import React from 'react';
import './ProductItem.scss';

const ProductItem = ({ id, url, alt, name, price }) => {
  return (
    <li className="product-item">
      <div className="product-img">
        <img src={url} alt={alt} />
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        <div className="product-price">
          {price.toLocaleString()} 원 - {price.toLocaleString()} 원
        </div>
        <div className="product-color">
          <a href="/" className="color-option focus">
            <img
              src="https://static.zarahome.net/8/photos4/2022/I/4/1/p/1193/088/712/1193088712_3_1_5.jpg?t=1656679149706&imformat=chrome"
              alt="white"
            />
          </a>
          <a href="/" className="color-option">
            <img
              src="https://static.zarahome.net/8/photos4/2022/I/4/1/p/1193/088/400/1193088400_3_1_5.jpg?t=1656679149706&imformat=chrome"
              alt="blue"
            />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
