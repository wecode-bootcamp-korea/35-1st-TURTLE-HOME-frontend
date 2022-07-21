import React, { useEffect, useState, useRef } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import SearchResult from '../../components/SearchResult/SearchResult';
import ProductList from '../../components/ProductList/ProductList';
import './Search.scss';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const [filteringProducts, setFilteringProducts] = useState([]);
  const searchWord = useRef('');

  /* 데이터 로딩 */
  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  /* 검색 기능 */
  //입력된 검색어 데이터 저장
  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  //검색어 입력 후 엔터를 눌렀을 때 filtering 작동
  const handleSubmit = e => {
    e.preventDefault();

    //products 전체 데이터(name) 중에서 검색어와 일치하는 상품 찾기
    const filtering = products.filter(product => {
      return product.name
        .toUpperCase()
        .includes(searchInput.trim().toUpperCase());
    });

    //filtering된 products 저장
    setFilteringProducts(filtering);

    //입력된 검색어의 현재 상태 저장
    searchWord.current = searchInput;

    //입력된 검색어 지우기
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
        <ProductList products={filteringProducts} />
      )}
    </main>
  );
};

export default Search;
