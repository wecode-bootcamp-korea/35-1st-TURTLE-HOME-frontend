import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ products, className }) => {
  const productClassName = () => {
    if (className === 'product-list') {
      return 'product-item';
    } else if (className === 'search-product-list') {
      return 'search-product-item';
    } else if (className === 'cart-product-list') {
      return 'cart-product-item';
    }
  };

  return (
    <ul className={className}>
      {products.map(({ id, image_url, name, prices }) => (
        <Product
          key={id}
          id={id}
          productClassName={productClassName()}
          image_url={image_url}
          alt={name}
          name={name}
          prices={prices}
        />
      ))}
    </ul>
  );
};

export default ProductList;
