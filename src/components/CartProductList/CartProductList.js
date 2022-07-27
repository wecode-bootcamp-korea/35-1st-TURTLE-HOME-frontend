import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './CartProductList.scss';

const CartProductList = ({
  products,
  className,
  setProducts,
  deleteProduct,
  setTotalProductPrice,
}) => {
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
            setProducts={setProducts}
            deleteProduct={deleteProduct}
            setTotalProductPrice={setTotalProductPrice}
          />
        )
      )}
    </ul>
  );
};

export default CartProductList;
