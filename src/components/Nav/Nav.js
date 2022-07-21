import React, { useEffect, useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const [category, setCategory] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/data/bigcategory.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      });
  }, []);

  return (
    <div className="nav">
      {console.log(data)}
      <div className="nav-header">
        <span className="header-copy">ZARAHOME+</span>
        <span>ABOUT</span>
        <span>CAMPAIGN</span>
        <span>COLLECTION</span>
      </div>
      <div className="nav-main">{/* map! */}</div>
      <div className="nav-footer">{/* map! */}</div>
    </div>
  );
};

export default Nav;
