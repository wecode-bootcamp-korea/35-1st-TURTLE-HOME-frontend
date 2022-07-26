import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../components/Config/Config';

import './MainCategory.scss';

const MainCategory = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const goToSubCategory = id => {
    navigate(`/productlist`);
  };

  useEffect(() => {
    fetch(`${API.categories}/categories/1/subcategories`)
      .then(res => res.json())
      .then(data => {
        setCategory(data.result);
      });
  }, []);

  return (
    <div className="category_box">
      {category.map(list => (
        <div
          className="category_list"
          key={list.id}
          onClick={() => {
            goToSubCategory(list.id);
          }}
        >
          <img src={list.image_url} alt="categoryList" />
          <p>{list.name}</p>
        </div>
      ))}
    </div>
  );
};
export default MainCategory;
