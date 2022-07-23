import React, { useState } from 'react';

const NavMenuComponent = ({ element }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const subMenuToggle = () => {
    setSubMenuOpen(prev => !prev);
  };
  return (
    <div>
      <span
        className="main-menus"
        onClick={() => {
          subMenuToggle();
        }}
      >
        {element.name}
      </span>
      {subMenuOpen
        ? element['category'].map((ele, i) => {
            return (
              <span key={i} className="main-sub-menus">
                {ele}
              </span>
            );
          })
        : ''}
    </div>
  );
};

export default NavMenuComponent;
