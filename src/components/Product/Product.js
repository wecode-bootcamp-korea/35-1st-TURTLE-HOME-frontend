import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({
  id,
  productClassName,
  image_url,
  name,
  min_price,
  max_price,
}) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/products/${id}`);
  };

  const min = Math.ceil(min_price);
  const max = Math.ceil(max_price);

  return (
    <li className={productClassName}>
      <div className="product-img" onClick={goToProductDetail}>
        <img src={image_url} alt={name} />
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        {min_price === max_price ? (
          <div>{min.toLocaleString('ko-KR')} 원</div>
        ) : (
          <div>
            {min.toLocaleString('ko-KR')} 원 - {max.toLocaleString('ko-KR')} 원
          </div>
        )}
      </div>
    </li>
  );
};

export default Product;
