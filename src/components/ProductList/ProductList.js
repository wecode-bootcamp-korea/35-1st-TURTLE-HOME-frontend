import React from 'react';
import './ProductList.scss';

const ProductList = ({ url, alt, name, price }) => {
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
      </div>
    </li>
  );
};

export default ProductList;
