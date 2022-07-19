import React, { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import SearchBox from '../../components/SearchBox/SearchBox';
import './Search.scss';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const filtering = products.filter(product => {
      return product.name.toUpperCase().includes(searchInput.toUpperCase());
    });

    setFilterProducts(filtering);
  };

  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  console.log(products);

  return (
    <main>
      <SearchBox
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        handleChange={handleChange}
      />
      <ProductList products={filterProducts} />
    </main>
  );
};

export default Search;
