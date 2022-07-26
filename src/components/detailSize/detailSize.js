import React, { useRef, useState } from 'react';
import './detailSize.scss';

const DetailSize = ({
  index,
  size,
  price,
  selectedComponentNumber,
  setSelectedComponentNumber,
  setTotalPrice,
  setTotalNumber,
  addCommaToPrice,
}) => {
  const [sizeComponentHover, setSizeComponentHover] = useState(false);
  const sizeComponentHoverHandler = () => {
    setSizeComponentHover(prev => !prev);
  };

  const orderNumber = useRef(1);

  const orderNumberMinus = () => {
    orderNumber.current > 1 && orderNumber.current--;
    setTotalNumber(orderNumber.current);
  };
  const orderNumberPlus = () => {
    orderNumber.current = orderNumber.current + 1;
    setTotalNumber(orderNumber.current);
  };

  const totalPriceChange = () => {
    setTotalPrice(orderNumber.current * price);
  };

  console.log(orderNumber);

  return (
    <div
      className={`size-component
            ${sizeComponentHover ? 'background-gray' : null}
           ${selectedComponentNumber === index ? 'background-gray' : null}`}
      onMouseOver={sizeComponentHoverHandler}
      onMouseOut={sizeComponentHoverHandler}
      onClick={() => {
        setSelectedComponentNumber(index);
        setTotalNumber(orderNumber.current);
        totalPriceChange();
      }}
    >
      <div className="size-left">
        <span className="size-korean">{size}</span>
      </div>
      <span
        className={`
      ${selectedComponentNumber === index ? 'display' : 'size-price'}`}
      >
        {addCommaToPrice(orderNumber.current * price)} 원
      </span>
      <div
        className={`
        ${selectedComponentNumber === index ? 'size-quantity' : 'display'}`}
      >
        <span onClick={orderNumberMinus}>
          <i className="fa-solid fa-minus"></i>
        </span>
        <div className="orderNumberCount">{orderNumber.current}</div>
        <span onClick={orderNumberPlus}>
          <i className="fa-solid fa-plus"></i>
        </span>
      </div>
    </div>
  );
};

export default DetailSize;
