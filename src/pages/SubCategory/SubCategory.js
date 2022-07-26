import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import './SubCategory.scss';

const SubCategory = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    sort_by: '',
    prices: '',
    size: '',
  });

  const [searchParams] = useSearchParams();

  const sort_by = searchParams.get('sort_by');
  const prices = searchParams.get('prices');
  const size = searchParams.get('size');

  const navigate = useNavigate();

  const applyFilter = () => {
    navigate(
      `/products?sort_by=${inputValue.sort_by}&prices=${inputValue.prices}&size=${inputValue.size}`
    );

    fetch(
      `http://10.58.0.176:8000/products?sort_by=${sort_by}&prices=${prices}&size=${size}`
    )
      .then(res => res.json())
      .then(data => setProducts(data.result));
  };

  // useEffect(() => {
  //   fetch(`http://10.58.0.176:8000/products`)
  //     .then(res => res.json())
  //     .then(data => setProducts(data.result));
  // }, []);

  useEffect(() => {
    fetch(`/data/mock.json`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const optionReset = () => {
    setInputValue({ sort_by: '', prices: '', size: '' });

    navigate(`/products`);

    fetch(`http://10.58.0.176:8000/products`)
      .then(res => res.json())
      .then(data => setProducts(data.result));
  };

  //---------분리-------------------
  const handleChange = e => {
    const { value, name } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
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
      {/* 필터 모달 */}
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
            <form className="filter-list">
              <ul>
                <li className="order">
                  <div className="filter-tab">
                    <span>종류</span>
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
                <li className="price">
                  <div className="filter-tab">
                    <span>가격</span>
                    <span>
                      <img src="/images/minus.png" alt="minus" />
                    </span>
                  </div>
                  <div className="options">
                    <div className="option">
                      <input
                        type="radio"
                        name="prices"
                        value="[0, 50000]"
                        onChange={handleChange}
                      />
                      <label>0원 - 50,000원 미만</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="prices"
                        value="50000to100000"
                        onChange={handleChange}
                      />
                      <label>50,000원 - 100,000원 미만</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="prices"
                        value="50000to100000"
                        onChange={handleChange}
                      />
                      <label>100,000원 - 150,000원 미만</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="prices"
                        value="100000to200000"
                        onChange={handleChange}
                      />
                      <label>150,000원 - 200,000원 미만</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="prices"
                        value="200000over"
                        onChange={handleChange}
                      />
                      <label>200,000원 이상</label>
                    </div>
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
                    <div className="option">
                      <input
                        type="radio"
                        name="size"
                        value="single"
                        onChange={handleChange}
                      />
                      <label>싱글</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="size"
                        value="double"
                        onChange={handleChange}
                      />
                      <label>더블</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="size"
                        value="queen"
                        onChange={handleChange}
                      />
                      <label>퀸</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="size"
                        value="king"
                        onChange={handleChange}
                      />
                      <label>킹</label>
                    </div>
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
            </form>
          </div>
        </div>
      </div>
      <ProductList products={products} className="product-list" />
    </section>
  );
};

export default SubCategory;
