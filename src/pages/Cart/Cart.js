import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './Cart.scss';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="cart">
      <div className="cart-header">
        <span>장바구니 number</span>
        <hr></hr>
      </div>
      <div className="cart-main">
        <div className="left-section">
          <ProductList products={products} className="cart-product-list" />
        </div>
        <div className="right-section">
          <div className="cart-right-title">제품</div>
          <hr></hr>
          <div className="cart-right-total">
            <div className="cart-small-total">
              <span>총 제품 : 세금 포함</span>
              <span>1,012,000원</span>
            </div>
            <div className="cart-big-total">
              <span>합계 :</span>
              <span>1,012,000원*</span>
            </div>
          </div>
          <div className="cart-promotion-span">
            프로모션 코드가 있으신가요? 나중에 결제 페이지에서 입력하십시오.
          </div>
          <button className="cart-order">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
