import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ products }) => {
  return (
    <section>
      <ul className="product-list">
        {products.map(({ id, url, alt, name, price }) => (
          <Product key={id} url={url} alt={alt} name={name} price={price} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
