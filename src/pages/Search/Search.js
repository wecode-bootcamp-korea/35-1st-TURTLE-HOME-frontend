import React, { useEffect, useState, useRef } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import SearchResult from '../../components/SearchResult/SearchResult';
import ProductList from '../../components/ProductList/ProductList';
import { API } from '../../components/Config/Config';
import './Search.scss';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const [filteringProducts, setFilteringProducts] = useState([]);
  const searchWord = useRef('');

  useEffect(() => {
    fetch(`${API.products}`)
      .then(res => res.json())
      .then(data => setProducts(data.result));
  }, []);

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      setFilteringProducts('');
    } else {
      const filtering = products.filter(product => {
        return product.name.toUpperCase().includes(searchInput.toUpperCase());
      });

      setFilteringProducts(filtering);
    }

    searchWord.current = searchInput.trim();
    setSearchInput('');
  };

  return (
    <main>
      <SearchBox
        handleSubmit={handleSubmit}
        searchInput={searchInput}
        handleChange={handleChange}
      />
      {filteringProducts.length === 0 ? (
        <SearchResult searchWord={searchWord.current} />
      ) : (
        <ProductList
          products={filteringProducts}
          productClassName="search-product-list"
        />
      )}
    </main>
  );
};

export default Search;
