import React from "react";
import CartItem from "../CartItem";

const CartList = () => {
  return (
    <div>
      {cartItens.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartList;
