import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ id, url, name, prices }) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/products/${id}`);
  };

  return (
    <li className="search-product-item">
      <div className="product-img" onClick={goToProductDetail}>
        <img src={url} alt={name} />
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        {prices.length === 1 ? (
          <div>{prices[0].toLocaleString('ko-KR')} 원</div>
        ) : (
          <div>
            {prices[0].toLocaleString('ko-KR')} 원 -{' '}
            {prices[prices.length - 1].toLocaleString('ko-KR')} 원
          </div>
        )}
      </div>
    </li>
  );
};

export default Product;
