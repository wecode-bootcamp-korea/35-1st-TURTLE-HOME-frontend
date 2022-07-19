import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <main>
      <section className="search-bar">
        <form>
          <input type="text" placeholder="무엇을 찾으세요?"></input>
        </form>
        <div className="x-box">
          <img src="/images/x_thin.png" alt="Exit from the search page" />
        </div>
      </section>
      <section className="products-list">
        <div className="result">검색어를 입력해 주세요</div>
      </section>
    </main>
  );
};

export default Search;
