import React, { useRef, useState } from 'react';
import './detailSize.scss';

const DetailSize = ({
  index,
  size,
  price,
  selectedComponentNumber,
  setSelectedComponentNumber,
  totalPrice,
  setTotalPrice,
}) => {
  const [sizeComponentHover, setSizeComponentHover] = useState(false);
  const sizeComponentHoverHandler = () => {
    setSizeComponentHover(prev => !prev);
  };

  // const [orderNumber, setOrderNumber] = useState(1);

  const orderNumber = useRef(1);

  const orderNumberMinus = () => {
    orderNumber.current > 1 && --orderNumber.current;
  };
  const orderNumberPlus = () => {
    ++orderNumber.current;
  };

  const priceWithComma = (price * orderNumber.current)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  const totalPriceChange = () => {
    setTotalPrice(priceWithComma);
  };

  const [render, setRender] = useState('');

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
      {' '}
      <div className="size-left">
        <span className="size-korean">{size}</span>
        <span className="size-number">(120 x 130)</span>
      </div>
      <span
        className={`
      ${selectedComponentNumber === index ? 'display' : 'size-price'}`}
      >
        {priceWithComma} 원
      </span>
      <div
        className={`
        ${selectedComponentNumber === index ? 'size-quantity' : 'display'}`}
      >
        <span
          onClick={() => {
            orderNumberMinus();
            setRender('');
          }}
        >
          <i class="fa-solid fa-minus"></i>
        </span>
        <div className="orderNumberCount">{orderNumber.current}</div>
        <span
          onClick={() => {
            orderNumberPlus();
            setRender('');
          }}
        >
          <i class="fa-solid fa-plus"></i>
        </span>
      </div>
    </div>
  );
};

export default DetailSize;
