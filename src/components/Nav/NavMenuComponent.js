import { Link } from 'react-router-dom';

const NavMenuComponent = ({
  element,
  index,
  subMenuOpenKey,
  setSubMenuOpenKey,
}) => {
  return (
    <div>
      <Link to="./main">
        <span
          className="main-menus"
          onClick={() => {
            setSubMenuOpenKey(index);
          }}
        >
          {element.name}
        </span>
      </Link>
      {index === subMenuOpenKey
        ? element['category'].map((subElement, i) => {
            return (
              <Link to="./sub" key={i}>
                <span className="main-sub-menus">{subElement}</span>
              </Link>
            );
          })
        : ''}
    </div>
  );
};

export default NavMenuComponent;
