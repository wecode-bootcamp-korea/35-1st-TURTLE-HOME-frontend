import React, { useState, useEffect } from 'react';
import CartProductList from '../../components/CartProductList/CartProductList';
import { API } from '../../components/Config/Config';
import './Cart.scss';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API.carts, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => setProducts(result.results));
  }, []);

  const totalPrice = products.reduce(
    (acc, { product_price, quantity }) => acc + product_price * quantity,
    0
  );

  const deleteProduct = id => {
    fetch(`${API.carts}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: localStorage.getItem('token') },
    }).then(res => {
      if (res.status === 204) {
        alert('상품이 장바구니에서 삭제되었습니다 🐢');
        setProducts(products.filter(product => product.cart_id !== id));
      } else {
        alert('다시 시도해 주세요 🥲');
      }
    });
  };

  const orderNumberMinus = id => {
    const selectedIdx = products.findIndex(product => product.cart_id === id);
    if (products[selectedIdx].quantity > 1) {
      const newProducts = [...products];
      newProducts[selectedIdx].quantity--;

      fetch(`${API.carts}/${id}`, {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({ quantity: newProducts[selectedIdx].quantity }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.message === 'SUCCESS') {
            setProducts(newProducts);
          } else {
            alert('다시 시도해 주세요 🥲');
          }
        });
    } else {
      return;
    }
  };

  const orderNumberPlus = id => {
    const selectedIdx = products.findIndex(product => product.cart_id === id);
    const newProducts = [...products];
    newProducts[selectedIdx].quantity++;

    fetch(`${API.carts}/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ quantity: newProducts[selectedIdx].quantity }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          setProducts(newProducts);
        } else {
          alert('다시 시도해 주세요 🥲');
        }
      });
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
            setProducts={setProducts}
            deleteProduct={deleteProduct}
            orderNumberMinus={orderNumberMinus}
            orderNumberPlus={orderNumberPlus}
          />
        </div>
        <div className="right-section">
          <div className="cart-right-title">제품</div>
          <hr></hr>
          <div className="cart-right-total">
            <div className="cart-small-total">
              <span>총 제품 : 세금 포함</span>
              <span>{totalPrice.toLocaleString('ko-KR')} 원</span>
            </div>
            <div className="cart-big-total">
              <span>합계 :</span>
              <span>{totalPrice.toLocaleString('ko-KR')}* 원</span>
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
