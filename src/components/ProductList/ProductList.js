import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';

const ProductList = ({ url, alt, name, price }) => {
  return (
    <li className="product-item">
      <Link to="">
        <div className="product-img">
          <img src={url} alt={alt} />
        </div>
      </Link>
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
