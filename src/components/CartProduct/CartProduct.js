import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartProduct.scss';

const CartProduct = ({
  id,
  productClassName,
  image_url,
  name,
  price,
  quantity,
  deleteProduct,
}) => {
  const navigate = useNavigate();
  const goToProductDetail = () => {
    navigate(`/products/${id}`);
  };

  const orderNumberMinus = () => {
    quantity > 1 && quantity--;
  };

  const orderNumberPlus = () => {
    quantity.current = quantity.current + 1;
  };

  return (
    <li className={productClassName}>
      <div className="product-img">
        <img src={image_url} alt={name} onClick={goToProductDetail} />
        <div className="delete" onClick={() => deleteProduct(id)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="product-detail">
        <div className="product-info">
          <h2>{name}</h2>
          <div>{price.toLocaleString('ko-KR')} 원</div>
          <div className="product-id">제품번호 : {id}</div>
        </div>
        <div className="product-count">
          <span onClick={orderNumberMinus}>
            <i className="fa-solid fa-minus"></i>
          </span>
          <div className="orderNumberCount">{quantity}</div>
          <span onClick={orderNumberPlus}>
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
