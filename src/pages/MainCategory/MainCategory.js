import React, { useEffect, useState } from 'react';
import './MainCategory.scss';

const MainCategory = () => {
  const [category, setCategory] = useState([]);
  const number = 1;

  useEffect(() => {
    fetch(`http://10.58.7.243:8000/categories/${number}/subcategories`)
      .then(res => res.json())
      .then(data => {
        setCategory(data.result);
      });
  }, []);

  return (
    <div className="category_box">
      {console.log(category)}
      {category.map(list => (
        <div className="category_list" key={list.id}>
          <img src={list.image_url} alt="category list" />
          <p>{list.name}</p>
        </div>
      ))}
    </div>
  );
};
export default MainCategory;
