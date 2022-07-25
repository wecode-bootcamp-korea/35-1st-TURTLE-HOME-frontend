import React from 'react';
import './SearchResult.scss';

const SearchResult = ({ searchWord }) => {
  return searchWord === '' ? (
    <div className="result">검색어를 입력해 주세요</div>
  ) : (
    <div className="result">"{searchWord}"에 대한 검색 결과가 없습니다.</div>
  );
};

export default SearchResult;
