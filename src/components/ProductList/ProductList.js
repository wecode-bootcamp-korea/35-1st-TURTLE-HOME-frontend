import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.scss';

const ProductList = ({ id, image_url, name, prices }) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <li className="product-item">
      <div className="product-img" onClick={goToProductDetail}>
        <img src={image_url} alt={name} />
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        <div className="product-price">
          {prices.length === 1 ? (
            <div>{prices[0].toLocaleString('ko-KR')} 원</div>
          ) : (
            <div>
              {prices[0].toLocaleString('ko-KR')} 원 -{' '}
              {prices[prices.length - 1].toLocaleString('ko-KR')} 원
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductList;
