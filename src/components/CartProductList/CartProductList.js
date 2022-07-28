import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './CartProductList.scss';

const CartProductList = ({
  products,
  className,
  setProducts,
  deleteProduct,
  orderNumberMinus,
  orderNumberPlus,
}) => {
  return (
    <ul className={className}>
      {products.map(
        ({
          cart_id,
          product_image,
          product_name,
          product_price,
          product_number,
          quantity,
        }) => (
          <CartProduct
            key={cart_id}
            id={cart_id}
            productClassName="cart-product-item"
            image_url={product_image}
            alt={product_name}
            name={product_name}
            price={product_price}
            productNumber={product_number}
            quantity={quantity}
            setProducts={setProducts}
            deleteProduct={deleteProduct}
            orderNumberMinus={() => orderNumberMinus(cart_id)}
            orderNumberPlus={() => orderNumberPlus(cart_id)}
          />
        )
      )}
    </ul>
  );
};

export default CartProductList;
