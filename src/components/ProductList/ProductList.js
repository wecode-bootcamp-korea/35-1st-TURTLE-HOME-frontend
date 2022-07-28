import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ products, productClassName }) => {
  return (
    <ul className={productClassName}>
      {products.map(({ id, image_url, name, min_price, max_price }) => (
        <Product
          key={id}
          id={id}
          productClassName={
            productClassName === 'product-list'
              ? 'product-item'
              : 'search-product-item'
          }
          image_url={image_url}
          alt={name}
          name={name}
          min_price={min_price}
          max_price={max_price}
        />
      ))}
    </ul>
  );
};

export default ProductList;
