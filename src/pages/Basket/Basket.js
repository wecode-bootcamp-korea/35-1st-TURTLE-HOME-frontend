import React, { useState } from 'react';
import './Basket.scss';

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket-header">
        <span>장바구니 number</span>
        <hr></hr>
      </div>
      <div className="basket-main">
        <div className="left-section"></div>
        <div className="right-section">
          <div className="basket-right-title">제품</div>
          <hr></hr>
          <div className="basket-right-total">
            <div className="basket-small-total">
              <span>총 제품 : 세금 포함</span>
              <span>1,012,000원</span>
            </div>
            <div className="basket-big-total">
              <span>합계 :</span>
              <span>1,012,000원*</span>
            </div>
          </div>
          <div className="basket-promotion-span">
            프로모션 코드가 있으신가요? 나중에 결제 페이지에서 입력하십시오.
          </div>
          <button className="basket-order">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
