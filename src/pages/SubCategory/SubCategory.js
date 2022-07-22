import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import './SubCategory.scss';

const SubCategory = () => {
  const [products, setProducts] = useState([]);

  /* 데이터 로딩 */
  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  console.log(products);

  return (
    <section className="products">
      <div className="options">
        <div className="total">{products.length}&nbsp;제품</div>
        <div>|</div>
        <Link to="">
          <div className="filters">필터</div>
        </Link>
      </div>
      <ul className="product-items">
        {products.map(({ id, url, alt, name, price }) => (
          <ProductList key={id} url={url} alt={alt} name={name} price={price} />
        ))}
      </ul>
    </section>
  );
};

export default SubCategory;
