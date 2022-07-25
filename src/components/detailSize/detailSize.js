import React, { useState } from 'react';
import './detailSize.scss';

const DetailSize = ({
  index,
  size,
  price,
  selectedNumber,
  setSelectedNumber,
}) => {
  const [sizeComponentHover, setSizeComponentHover] = useState(false);
  const sizeComponentHoverHandler = () => {
    setSizeComponentHover(prev => !prev);
  };

  const [orderNumber, setorderNumber] = useState(1);
  const orderNumberMinus = () => {
    orderNumber > 1 && setorderNumber(prev => prev - 1);
  };
  const orderNumberPlus = () => {
    setorderNumber(prev => prev + 1);
  };

  const priceWithComma = price
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div
      className={
        sizeComponentHover ? 'size-component background-gray' : 'size-component'
      }
      onMouseOver={sizeComponentHoverHandler}
      onMouseOut={sizeComponentHoverHandler}
      onClick={setSelectedNumber(index)}
    >
      {console.log(index)}
      <div className="size-left">
        <span className="size-korean">{size}</span>
        <span className="size-number">(120 x 130)</span>
      </div>
      <span className={sizeComponentHover ? 'display' : 'size-price'}>
        {priceWithComma} 원
      </span>

      <div class={sizeComponentHover ? 'size-quantity' : 'display'}>
        <span onClick={orderNumberMinus}>
          <i class="fa-solid fa-minus"></i>
        </span>
        <div className="orderNumberCount">{orderNumber}</div>
        <span onClick={orderNumberPlus}>
          <i class="fa-solid fa-plus"></i>
        </span>
      </div>
    </div>
  );
};

export default DetailSize;
