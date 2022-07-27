import React, { useState, useEffect } from 'react';
import CartProductList from '../../components/CartProductList/CartProductList';
import { API } from '../../components/Config/Config';
import './Cart.scss';

//상품별 상품으로 갈 수 있는 링크 부여.

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [productPrice, setProductPrice] = useState();

  useEffect(() => {
    fetch(`${API.carts}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const deleteProduct = id => {
    fetch(`${API.carts}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: localStorage.getItem('token') },
    }).then(res => res.json());

    setProducts(products.filter(product => product.cart_id !== id));
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-header-title">장바구니</div>
        <hr></hr>
      </div>
      <div className="cart-main">
        <div className="left-section">
          <CartProductList
            products={products}
            className="cart-product-list"
            setProductPrice={setProductPrice}
            deleteProduct={deleteProduct}
          />
        </div>
        <div className="right-section">
          <div className="cart-right-title">제품</div>
          <hr></hr>
          <div className="cart-right-total">
            <div className="cart-small-total">
              <span>총 제품 : 세금 포함</span>
              <span>{Number(productPrice).toLocaleString('ko-KR')} 원</span>
            </div>
            <div className="cart-big-total">
              <span>합계 :</span>
              <span>{Number(productPrice).toLocaleString('ko-KR')}* 원</span>
            </div>
          </div>
          <div className="cart-promotion-span">
            프로모션 코드가 있으신가요? 나중에 결제 페이지에서 입력하십시오.
          </div>
          <button
            className="cart-order"
            onClick={() => {
              alert('주문완료 !');
            }}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
