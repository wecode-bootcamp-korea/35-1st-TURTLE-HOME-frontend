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
        ? element['category'].map((subElement, i) => {
            return (
              <span key={i} className="main-sub-menus">
                {subElement}
              </span>
            );
          })
        : ''}
    </div>
  );
};

export default NavMenuComponent;
