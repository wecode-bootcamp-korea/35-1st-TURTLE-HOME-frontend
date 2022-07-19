import React from 'react';
import './Product.scss';

const Product = ({ url, alt, title, price }) => {
  return (
    <article className="product">
      <div className="product-image">
        <img src={url} alt={alt} />
      </div>
      <div className="product-info">
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
      {/* <div className="result">검색어를 입력해 주세요</div> */}
    </article>
  );
};

export default Product;
