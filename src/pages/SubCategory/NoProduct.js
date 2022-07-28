import React from 'react';
import './NoProduct.scss';

const NoProduct = () => {
  return (
    <div className="no-product">
      <img src="/images/turtle.png" alt="turtle logo" />
      <div>“선택하신 필터에 해당하는 제품을 찾을 수 없습니다.</div>
      <div>제품을 더 보시려면 필터를 제거해 주세요"</div>
    </div>
  );
};

export default NoProduct;
