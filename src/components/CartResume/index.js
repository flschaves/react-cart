import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import formatPrice from "../../helpers/formatPrice";

import styles from "./index.module.scss";

const CartResume = () => {
  const {
    state: { itemsCount, total, subtotal, discount },
  } = useContext(CartContext);

  return (
    <div className={styles["cart-resume"]}>
      <div>Itens: {itemsCount}</div>
      <div>Total em produtos: {formatPrice(subtotal)}</div>
      <div>Descontos: {formatPrice(discount)}</div>
      <div>Total: {formatPrice(total)}</div>
    </div>
  );
};

export default CartResume;
