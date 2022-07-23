import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <img
        src="./images/flowerimage.png"
        className="left-section"
        alt="detail"
      />
      <div className="right-section">
        <div className="detail-header">
          <div className="product-title">따뜻한 이불</div>
          <div className="product-price">
            <span className="min-price">10,000 원</span>
            <span>-</span>
            <span className="max-price"> 20,000 원</span>
          </div>
          <div className="product-id">제품번호 123123123</div>
          <div className="product-description">
            어쩌고 저쩌고 좋은 이불입니다.어쩌고 저쩌고 좋은 이불입니다.어쩌고
            저쩌고 좋은 이불입니다.어쩌고 저쩌고 좋은 이불입니다.어쩌고 저쩌고
            좋은 이불입니다.어쩌고 저쩌고 좋은 이불입니다.어쩌고 저쩌고 좋은
            이불입니다.
          </div>
        </div>
        <div className="detail-main">
          <div className="size-title">사이즈</div>
          <hr></hr>
          <div className="size-component">
            <div className="size-left">
              <span className="size-korean">싱글</span>
              <span className="size-number">(120 x 130)</span>
            </div>
            <span className="size-price">10,000원</span>
          </div>
          <div className="size-component">
            <div className="size-left">
              <span className="size-korean">싱글</span>
              <span className="size-number">(120 x 130)</span>
            </div>
            <span className="size-price">10,000원</span>
          </div>
          <div className="size-component">
            <div className="size-left">
              <span className="size-korean">싱글</span>
              <span className="size-number">(120 x 130)</span>
            </div>
            <span className="size-price">10,000원</span>
          </div>

          <hr></hr>
        </div>
        <div className="detail-footer">
          <button className="put-shopping-basket">장바구니에 담기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
