import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      {products.map(({ id, url, alt, title, price }) => (
        <Product key={id} url={url} alt={alt} title={title} price={price} />
      ))}
      {/* <div className="result">검색어를 입력해 주세요</div> */}
    </section>
  );
};

export default ProductList;
