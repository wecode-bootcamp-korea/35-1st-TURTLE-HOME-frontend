import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ id, url, alt, name, price }) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/products/${id}`);
  };

  return (
    <li className="search-product-item">
      <div className="product-img" onClick={goToProductDetail}>
        <img src={url} alt={alt} />
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        {price.length === 1 ? (
          <div>{price[0].toLocaleString('ko-KR')} 원</div>
        ) : (
          <div>
            {price[0].toLocaleString('ko-KR')} 원 -{' '}
            {price[price.length - 1].toLocaleString('ko-KR')} 원
          </div>
        )}
      </div>
    </li>
  );
};

export default Product;
