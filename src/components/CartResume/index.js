import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import { CartContext } from "../../context/CartContext";

import formatPrice from "../../helpers/formatPrice";

import styles from "./index.module.scss";

const CartResume = () => {
  const {
    state: { itemsCount, total, subtotal, discount },
  } = useContext(CartContext);

  return (
    <div className={styles["cart-resume"]}>
      <div className={styles["cart-resume__header"]}>Resumo do Pedido</div>
      <div className={styles["cart-resume__body"]}>
        <div
          className={`${styles["cart-resume__body-line"]} ${styles["cart-resume__body-line--items"]}`}
        >
          Itens <span>{itemsCount}</span>
        </div>
        <div
          className={`${styles["cart-resume__body-line"]} ${styles["cart-resume__body-line--subtotal"]}`}
        >
          Total em produtos <span>{formatPrice(subtotal)}</span>
        </div>
        <div
          className={`${styles["cart-resume__body-line"]} ${styles["cart-resume__body-line--discount"]}`}
        >
          Descontos <span>{formatPrice(discount)}</span>
        </div>
        <div
          className={`${styles["cart-resume__body-line"]} ${styles["cart-resume__body-line--total"]}`}
        >
          Total <span>{formatPrice(total)}</span>
        </div>
      </div>
      <div className={styles["cart-resume__footer"]}>
        <Link to="/checkout">
          <Button style={{ width: "100%" }}>Finalizar a compra</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartResume;
