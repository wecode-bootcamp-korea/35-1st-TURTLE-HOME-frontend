import React from 'react';

const Filterlist = ({ filterTabTitle, handleChange }) => {
  return (
    <li>
      <div className="filter-tab">
        <span>{filterTabTitle}</span>
        <span>
          <img src="/images/minus.png" alt="minus" />
        </span>
      </div>
      <div className="options">
        <div className="option">
          <input
            type="radio"
            name="sort_by"
            value="low_price"
            onChange={handleChange}
          />
          <label>낮은 가격순</label>
        </div>
        <div className="option">
          <input
            type="radio"
            name="sort_by"
            value="high_price"
            onChange={handleChange}
          />
          <label>높은 가격순</label>
        </div>
        <div className="option">
          <input
            type="radio"
            name="sort_by"
            value="newest"
            onChange={handleChange}
          />
          <label>신상품</label>
        </div>
      </div>
    </li>
  );
};

export default Filterlist;
