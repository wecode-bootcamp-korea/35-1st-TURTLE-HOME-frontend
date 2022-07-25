import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import './SubCategory.scss';

const SubCategory = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    order: '',
    prices: '',
    sizes: '',
  });

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    fetch(`http://10.58.0.176:8000/products`)
      .then(res => res.json())
      .then(data => setProducts(data.result));
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const optionReset = () => {
    setInputValue({ order: '', prices: '', sizes: '' });
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
                        value="price"
                        onChange={handleChange}
                      />
                      <label>낮은 가격순</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="order"
                        value="-price"
                        onChange={handleChange}
                      />
                      <label>높은 가격순</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="order"
                        value="-id"
                        onChange={handleChange}
                      />
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
                      <input
                        type="checkbox"
                        name="prices"
                        value="0to50000"
                        onChange={handleChange}
                      />
                      <label>0원 - 50,000원 미만</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="prices"
                        value="50000to100000"
                        onChange={handleChange}
                      />
                      <label>50,000원 - 100,000원 미만</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="prices"
                        value="100000to200000"
                        onChange={handleChange}
                      />
                      <label>100,000원 - 200,000원 미만</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="prices"
                        value="200000over"
                        onChange={handleChange}
                      />
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
                      <input
                        type="checkbox"
                        name="sizes"
                        value="single"
                        onChange={handleChange}
                      />
                      <label>싱글</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="sizes"
                        value="double"
                        onChange={handleChange}
                      />
                      <label>더블</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="sizes"
                        value="queen"
                        onChange={handleChange}
                      />
                      <label>퀸</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        name="sizes"
                        value="king"
                        onChange={handleChange}
                      />
                      <label>킹</label>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="filter-footer">
                <div className="footer-box" onClick={optionReset}>
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
        {products.map(({ id, image_url, name, prices }) => (
          <ProductList
            key={id}
            id={id}
            image_url={image_url}
            alt={name}
            name={name}
            prices={prices}
          />
        ))}
      </ul>
    </section>
  );
};

export default SubCategory;
