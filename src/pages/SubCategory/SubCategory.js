import React, { useState, useEffect } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import './SubCategory.scss';

const SubCategory = () => {
  const [products, setProducts] = useState([]);

  /* 데이터 로딩 */
  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="products">
      <ul className="product-items">
        {products.map(({ id, url, alt, name, price }) => (
          <ProductItem key={id} url={url} alt={alt} name={name} price={price} />
        ))}
      </ul>
    </section>
  );
};

export default SubCategory;
