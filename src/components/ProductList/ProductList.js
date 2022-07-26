import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ products, className }) => {
  const productClassName =
    className === 'product-list' ? 'product-item' : 'search-product-item';

  return (
    <ul className={className}>
      {products.map(({ id, image_url, name, prices }) => (
        <Product
          key={id}
          id={id}
          productClassName={productClassName}
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
