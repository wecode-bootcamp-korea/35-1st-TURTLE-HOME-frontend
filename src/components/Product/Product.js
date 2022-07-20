import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ url, alt, name, price }) => {
  return (
    <li className="product">
      <Link to="/">
        <img src={url} alt={alt} />
        <div className="product-info">
          <h2>{name}</h2>
          <p>{price.toLocaleString('ko-KR')}원</p>
        </div>
      </Link>
    </li>
  );
};

export default Product;
