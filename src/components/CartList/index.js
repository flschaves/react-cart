import React, { useContext } from "react";
import CartItem from "../CartItem";

import { CartContext } from "../../context/CartContext";

const CartList = () => {
  const {
    state: { cartItems },
  } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartList;
