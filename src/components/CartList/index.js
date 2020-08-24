import React, { useContext } from "react";
import CartItem from "../CartItem";

import { CartContext } from "../../context/CartContext";

const CartList = () => {
  const {
    state: { cartItens },
  } = useContext(CartContext);

  return (
    <div>
      {cartItens.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartList;
