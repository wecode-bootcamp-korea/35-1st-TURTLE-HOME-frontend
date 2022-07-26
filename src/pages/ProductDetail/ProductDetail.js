import React, { useEffect, useState } from 'react';
import './ProductDetail.scss';
import '../../components/detailSize/detailSize';
import DetailSize from '../../components/detailSize/detailSize';

const ProductDetail = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // fetch(`http://10.58.7.243:8000/products/${test}`);
    // .then(data => setData(data.result));
    fetch('./data/detail.json')
      .then(response => response.json())
      .then(data => setData(data.result));
  }, []);

  const [minPrice, maxPrice] = [
    data.description &&
      data.options[0].price
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
    data.description &&
      data.options[1].price /* 인덱스 4로 바꿔야함 */
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
  ];

  const [selectedComponentNumber, setSelectedComponentNumber] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="product-detail">
      <img src={`${data.image_url}`} className="left-section" alt="detail" />
      <div className="right-section">
        <div className="detail-header">
          <div className="product-title">{data && data.name}</div>
          <div className="product-price">
            <span className="min-price">{minPrice} 원</span>
            <span> - </span>
            <span className="max-price">{maxPrice} 원</span>
          </div>
          <div className="product-id">제품번호 {data && data.number}</div>
          <div className="product-description">{data && data.description}</div>
        </div>
        <div className="detail-main">
          <div className="size-title">사이즈</div>
          <hr></hr>
          {data.description &&
            data.options.map((element, i) => {
              return (
                <DetailSize
                  key={i}
                  index={i}
                  size={element.size}
                  price={element.price}
                  selectedComponentNumber={selectedComponentNumber}
                  setSelectedComponentNumber={setSelectedComponentNumber}
                  setTotalPrice={setTotalPrice}
                />
              );
            })}
          <hr></hr>
        </div>
        <div className="detail-footer">
          <button className="put-shopping-basket">
            장바구니에 담기 ({totalPrice}원)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
