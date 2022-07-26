import React, { useState } from 'react';
import './detailSize.scss';

const DetailSize = ({
  index,
  size,
  price,
  selectedComponentNumber,
  setSelectedComponentNumber,
  setTotalPrice,
}) => {
  const [sizeComponentHover, setSizeComponentHover] = useState(false);
  const sizeComponentHoverHandler = () => {
    setSizeComponentHover(prev => !prev);
  };

  // const orderNumber = useRef(1);

  const [orderNumber, setOrderNumber] = useState(1);

  const orderNumberMinus = () => {
    orderNumber > 1 && setOrderNumber(prev => prev - 1);
  };
  const orderNumberPlus = () => {
    setOrderNumber(prev => prev + 1);
  };

  // const priceWithComma = (price * orderNumber)
  //   .toString()
  //   .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  const totalPriceChange = () => {
    setTotalPrice(orderNumber * price);
  };

  return (
    <div
      className={`size-component
            ${sizeComponentHover ? 'background-gray' : null}
           ${selectedComponentNumber === index ? 'background-gray' : null}`}
      onMouseOver={sizeComponentHoverHandler}
      onMouseOut={sizeComponentHoverHandler}
      onClick={() => {
        setSelectedComponentNumber(index);
        totalPriceChange();
      }}
    >
      <div className="size-left">
        <span className="size-korean">{size}</span>
        <span className="size-number">(120 x 130)</span>
      </div>
      <span
        className={`
      ${selectedComponentNumber === index ? 'display' : 'size-price'}`}
      >
        {orderNumber * price} 원
      </span>
      <div
        className={`
        ${selectedComponentNumber === index ? 'size-quantity' : 'display'}`}
      >
        <span
          onClick={() => {
            orderNumberMinus();
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </span>
        <div className="orderNumberCount">{orderNumber}</div>
        <span
          onClick={() => {
            orderNumberPlus();
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </span>
      </div>
    </div>
  );
};

export default DetailSize;
