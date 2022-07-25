import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.scss';

const ProductList = ({ id, url, alt, name, price }) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/product/${id}`);
  };

  return (
    <li className="product-item">
      <div className="product-img" onClick={goToProductDetail}>
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
