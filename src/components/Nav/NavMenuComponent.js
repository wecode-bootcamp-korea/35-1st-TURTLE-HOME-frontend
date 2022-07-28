import { useNavigate } from 'react-router-dom';

const NavMenuComponent = ({
  element,
  index,
  subMenuOpenKey,
  setSubMenuOpenKey,
}) => {
  const navigate = useNavigate();
  const navigateToMenu = (index, to) => {
    index === 0 && navigate(to);
  };

  return (
    <div>
      <span
        className="main-menus"
        onClick={() => {
          setSubMenuOpenKey(index);
          navigateToMenu(index, './maincategory');
        }}
      >
        {element.name}
      </span>

      {index === subMenuOpenKey
        ? element['category'].map((subElement, i) => {
            return (
              <span
                key={i}
                className="main-sub-menus"
                onClick={() => {
                  navigateToMenu(i, './sub');
                }}
              >
                {subElement}
              </span>
            );
          })
        : ''}
    </div>
  );
};

export default NavMenuComponent;
