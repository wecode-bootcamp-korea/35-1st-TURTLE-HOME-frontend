import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './SubCategory.scss';

const SubCategory = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  /* 데이터 로딩 */
  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = e => {
    const { value } = e.target;
  };

  const reset = e => {};

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
        <div className={modalOpen && 'filter-backdrop'} onClick={closeModal}>
          <div
            className={'filter-container' + (modalOpen === true ? ' open' : '')}
          >
            <div className="filter-header">
              <h2>필터</h2>
              <img
                src="/images/x-thin.png"
                alt="close button"
                onClick={closeModal}
              />
            </div>
            <form className="filter-list">
              <ul>
                <li className="order">
                  <div className="filter-tab">
                    <span>종류</span>
                    <span>-</span>
                  </div>
                  <div className="options">
                    <div className="option">
                      <input
                        type="radio"
                        name="order"
                        value="low-to-high"
                        onChange={handleChange}
                      />
                      <label>낮은 가격순</label>
                    </div>
                    <div className="option">
                      <input type="radio" name="order" value="high-to-low" />
                      <label>높은 가격순</label>
                    </div>
                    <div className="option">
                      <input type="radio" name="order" value="new" />
                      <label>신상품</label>
                    </div>
                  </div>
                </li>
                <li className="price">
                  <div className="filter-tab">
                    <span>가격</span>
                    <span>-</span>
                  </div>
                  <div className="options">
                    <div className="option">
                      <input type="checkbox" name="price" value="0to50000" />
                      <label>0원 - 50,000원</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="price"
                        value="50000to100000"
                      />
                      <label>50,000원 - 100,000원</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="price"
                        value="100000to200000"
                      />
                      <label>100,000원 - 200,000원</label>
                    </div>
                    <div className="option">
                      <input type="checkbox" name="price" value="200000over" />
                      <label>200,000원 이상</label>
                    </div>
                  </div>
                </li>
                <li className="sizes">
                  <div className="filter-tab">
                    <span>사이즈</span>
                    <span>-</span>
                  </div>
                  <div className="options">
                    <div className="option">
                      <input type="checkbox" name="sizes" value="single" />
                      <label>싱글</label>
                    </div>
                    <div className="option">
                      <input type="checkbox" name="sizes" value="double" />
                      <label>더블</label>
                    </div>
                    <div className="option">
                      <input type="checkbox" name="sizes" value="queen" />
                      <label>퀸</label>
                    </div>
                    <div className="option">
                      <input type="checkbox" name="sizes" value="king" />
                      <label>킹</label>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="filter-footer">
                <div className="footer-box" onClick={reset}>
                  초기화
                </div>
                <div className="footer-box" onClick={closeModal}>
                  닫기
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ul className="product-items">
        {products.map(({ id, url, alt, name, price }) => (
          <ProductList key={id} url={url} alt={alt} name={name} price={price} />
        ))}
      </ul>
    </section>
  );
};

export default SubCategory;
