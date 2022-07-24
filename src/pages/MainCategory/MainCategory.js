import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainCategory.scss';

const MainCategory = () => {
  const [category, setCategory] = useState([]);
  const number = 1;
  const navigate = useNavigate();
  const goToSubCategory = () => {
    navigate(`category/${category.id}`);
  };
  console.log(category);
  useEffect(() => {
    fetch(`http://10.58.7.243:8000/categories/${number}/subcategories`)
      .then(res => res.json())
      .then(data => {
        setCategory(data.result);
      });
  }, []);

  return (
    <div className="category_box">
      {category.map(list => (
        <div className="category_list" key={list.id} onClick={goToSubCategory}>
          <img src={list.image_url} alt="category list" />
          <p>{list.name}</p>
        </div>
      ))}
    </div>
  );
};
export default MainCategory;
