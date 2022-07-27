import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBox.scss';

const SearchBox = ({ handleSubmit, searchInput, handleChange }) => {
  return (
    <section className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="무엇을 찾으세요?"
          value={searchInput}
          onChange={handleChange}
        ></input>
      </form>
      <Link to="/" className="close-box">
        <img src="/images/x_thin.png" alt="Exit from the search page" />
      </Link>
    </section>
  );
};

export default SearchBox;
