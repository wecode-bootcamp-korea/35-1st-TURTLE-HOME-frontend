import React, { useState } from 'react';
import './detailSize.scss';

const DetailSize = ({
  index,
  size,
  price,
  selectedComponentNumber,
  setSelectedComponentNumber,
  totalPriceArray,
  setTotalPriceArray,
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

  const priceWithComma = (price * orderNumber)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  const newPriceArray = [...totalPriceArray];
  newPriceArray[index] = price * orderNumber;
  setTotalPriceArray(newPriceArray);

  return (
    <div
      className={`size-component
            ${sizeComponentHover ? 'background-gray' : null}
           ${selectedComponentNumber === index ? 'background-gray' : null}`}
      onMouseOver={sizeComponentHoverHandler}
      onMouseOut={sizeComponentHoverHandler}
      onClick={() => {
        setSelectedComponentNumber(index);
      }}
    >
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
