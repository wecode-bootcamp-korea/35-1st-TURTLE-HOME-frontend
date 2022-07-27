import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../Config/Config';
import './CartProduct.scss';

const CartProduct = ({
  id,
  productClassName,
  image_url,
  name,
  price,
  quantity,
  setProducts,
  deleteProduct,
  setTotalProductPrice,
}) => {
  const navigate = useNavigate();

  const [realNumber, setRealNumber] = useState(quantity);

  const cartNumberFetch = () => {
    fetch(`${API.carts}/${id}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: {
        quantity: realNumber,
      },
    })
      .then(response => response.json())
      .then(result => setProducts(result.results));
  };

  useEffect(() => {
    totalPriceHandler();
  }, []);

  const goToProductDetail = () => {
    navigate(`/products/${id}`);
  };

  const orderNumberMinus = () => {
    realNumber > 1 && setRealNumber(prev => Number(prev) - 1);
    cartNumberFetch();
  };

  const orderNumberPlus = () => {
    setRealNumber(prev => Number(prev) + 1);
    cartNumberFetch();
  };

  console.log('real', realNumber);

  const totalPriceHandler = () => {
    setTotalProductPrice(prev => prev + realNumber * price);
  };

  return (
    <li className={productClassName}>
      <div className="product-img">
        <img src={image_url} alt={name} onClick={goToProductDetail} />
        <div className="delete" onClick={() => deleteProduct(id)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="product-detail">
        <div className="product-info">
          <h2>{name}</h2>
          <div>{price.toLocaleString('ko-KR')} 원</div>
          <div className="product-id">제품번호 : {id}</div>
        </div>
        <div className="product-count">
          <span onClick={orderNumberMinus}>
            <i className="fa-solid fa-minus"></i>
          </span>
          <div className="orderNumberCount">{realNumber}</div>
          <span onClick={orderNumberPlus}>
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
