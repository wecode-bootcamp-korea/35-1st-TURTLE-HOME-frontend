import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './CartProductList.scss';

const CartProductList = ({
  products,
  className,
  setProductPrice,
  deleteProduct,
}) => {
  let totalPrice = 0;

  products.forEach(element => {
    totalPrice = `${Number(totalPrice) + Number(element.product_price)}`;
  });

  setProductPrice(totalPrice);

  return (
    <ul className={className}>
      {products.map(
        ({ cart_id, product_image, product_name, product_price, quantity }) => (
          <CartProduct
            key={cart_id}
            id={cart_id}
            productClassName="cart-product-item"
            image_url={product_image}
            alt={product_name}
            name={product_name}
            price={product_price}
            quantity={quantity}
            deleteProduct={deleteProduct}
          />
        )
      )}
    </ul>
  );
};

export default CartProductList;
