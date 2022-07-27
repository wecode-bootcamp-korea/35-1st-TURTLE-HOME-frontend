import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import { API } from '../../components/Config/Config';
import './SubCategory.scss';

const SubCategory = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    sort_by: '',
    rangeId: '',
    size: '',
  });

  const location = useLocation();

  useEffect(() => {
    fetch(`${API.products}${location.search}`)
      .then(res => res.json())
      .then(data => setProducts(data.result));
  }, [location]);

  const handleChange = e => {
    const { value, name } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const min = inputValue.rangeId ? inputValue.rangeId * 50000 : '';
  const max = min === 200000 || min === '' ? 0 : min + 50000;

  const sort_by = inputValue.sort_by && '&sort_by=';
  const min_price = min === '' ? '' : `&min_price=${min}`;
  const max_price = max === 0 ? '' : `&max_price=${max}`;
  const size = inputValue.size && '&size=';

  const navigate = useNavigate();

  const applyFilter = () => {
    navigate(
      `/products?${sort_by}${inputValue.sort_by}${min_price}${max_price}${size}${inputValue.size}`
    );
  };

  const optionReset = () => {
    setInputValue({ sort_by: '', rangeId: '', size: '' });
    navigate(`/products`);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="products">
      <div className="side">
        <div>{products.length}&nbsp;제품</div>
        <div>|</div>
        <div className="filter-button" onClick={openModal}>
          필터
        </div>
      </div>
      <div className="filter-modal">
        <div className={modalOpen && 'filter-backdrop'}>
          <div
            className={'filter-container' + (modalOpen === true ? ' open' : '')}
          >
            <div className="filter-header">
              <h2>필터</h2>
              <img
                src="/images/x_thin.png"
                alt="close button"
                onClick={closeModal}
              />
            </div>
            <div className="filter-list">
              <ul>
                <li className="order">
                  <div className="filter-tab">
                    <span>종류</span>
                    <span>
                      <img src="/images/minus.png" alt="minus" />
                    </span>
                  </div>
                  <div className="options">
                    {ORDER_FILTER_LIST.map(list => {
                      return (
                        <div className="option" key={list.id}>
                          <input
                            type="radio"
                            name="sort_by"
                            value={list.value}
                            onChange={handleChange}
                          />
                          <label>{list.title}</label>
                        </div>
                      );
                    })}
                  </div>
                </li>
                <li className="price">
                  <div className="filter-tab">
                    <span>가격</span>
                    <span>
                      <img src="/images/minus.png" alt="minus" />
                    </span>
                  </div>
                  <div className="options">
                    {PRICE_FILTER_LIST.map(list => {
                      return (
                        <div className="option" key={list.id}>
                          <input
                            type="radio"
                            name="rangeId"
                            value={list.id}
                            onChange={handleChange}
                          />
                          <label>{list.title}</label>
                        </div>
                      );
                    })}
                  </div>
                </li>
                <li className="size">
                  <div className="filter-tab">
                    <span>사이즈</span>
                    <span>
                      <img src="/images/minus.png" alt="minus" />
                    </span>
                  </div>
                  <div className="options">
                    {SIZE_FILTER_LIST.map(list => {
                      return (
                        <div className="option" key={list.id}>
                          <input
                            type="radio"
                            name="size"
                            value={list.value}
                            onChange={handleChange}
                          />
                          <label>{list.title}</label>
                        </div>
                      );
                    })}
                  </div>
                </li>
              </ul>
              <div className="filter-footer">
                <input
                  type="reset"
                  className="footer-box"
                  value="초기화"
                  onClick={optionReset}
                ></input>
                <div className="footer-box" onClick={applyFilter}>
                  적용
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductList products={products} productClassName="product-list" />
    </section>
  );
};
export default SubCategory;

const ORDER_FILTER_LIST = [
  { id: 0, value: 'low_price', title: '낮은 가격순' },
  { id: 1, value: 'high_price', title: '높은 가격순' },
  { id: 2, value: 'newest', title: '신상품순' },
];

const PRICE_FILTER_LIST = [
  { id: 0, title: '0원 - 50,000원 미만' },
  { id: 1, title: '50,000원 - 100,000원 미만' },
  { id: 2, title: '100,000원 - 150,000원 미만' },
  { id: 3, title: '150,000원 - 200,000원 미만' },
  { id: 4, title: '200,000원 이상' },
];

const SIZE_FILTER_LIST = [
  { id: 0, value: 'single', title: '싱글' },
  { id: 1, value: 'double', title: '더블' },
  { id: 2, value: 'queen', title: '퀸' },
  { id: 3, value: 'king', title: '킹' },
];
