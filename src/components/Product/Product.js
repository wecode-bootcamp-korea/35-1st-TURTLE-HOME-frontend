import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ url, alt, name, price }) => {
  const handlePrice = () => {
    if (price.length === 1) {
      return <div>{price[0].toLocaleString('ko-KR')} 원</div>;
    } else {
      return (
        <div>
          {price[0].toLocaleString('ko-KR')} 원 -{' '}
          {price[price.length - 1].toLocaleString('ko-KR')} 원
        </div>
      );
    }
  };

  return (
    <li className="search-product-item">
      <Link to="">
        <div className="product-img">
          <img src={url} alt={alt} />
        </div>
      </Link>
      <div className="product-info">
        <h2>{name}</h2>
        {handlePrice()}
      </div>
    </li>
  );
};

export default Product;
