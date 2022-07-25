import React, { useEffect, useState } from 'react';
import './ProductDetail.scss';
import '../../components/detailSize/detailSize';
import DetailSize from '../../components/detailSize/detailSize';

//위에서 받아온다. url을.
// 그 url값을 파람스로 받아와서 입력.
//id 값을 받아와서 그 Id값에 맞는 자료를 백엔드에 요청한다.

const ProductDetail = () => {
  const [data, setData] = useState({});

  // options 4로 바뀌어야됨 그게 최대값.

  // const test = 1;

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
      data.options[1].price
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
  ];

  const [selectedNumber, setSelectedNumber] = useState(0);

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
                  selectedNumber={selectedNumber}
                  setSelectedNumber={setSelectedNumber}
                />
              );
            })}
          <hr></hr>
        </div>
        <div className="detail-footer">
          <button className="put-shopping-basket">장바구니에 담기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
