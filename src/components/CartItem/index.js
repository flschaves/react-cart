import React from "react";

import CommentIcon from "@material-ui/icons/ModeComment";
import DeleteIcon from "@material-ui/icons/Delete";
import IncreaseIcon from "@material-ui/icons/Add";
import DecreaseIcon from "@material-ui/icons/Remove";

import formatPrice from "../../helpers/formatPrice";

import styles from "./index.module.scss";

const CartItem = ({ product }) => {
  return (
    <div className={styles["cart-item"]}>
      <div className={styles["cart-item__image"]}>
        <img src={product.url_imagem} alt={product.nome} />
      </div>
      <div className={styles["cart-item__meta"]}>
        <div className={styles["cart-item__meta-title"]}>{product.nome}</div>
        <div className={styles["cart-item__meta-sku"]}>SKU {product.sku}</div>
        <div
          className={`${styles["cart-item__meta-observation"]} ${
            product.observation
              ? styles["cart-item__meta-observation--has-observation"]
              : ""
          }`}
        >
          <CommentIcon fontSize="small" />
          <span>
            {product.observation ? product.observation : "Adicionar observação"}
          </span>
        </div>
      </div>
      <div className={styles["cart-item__quantity"]}>
        <div className={styles["cart-item__quantity-selector"]}>
          <DecreaseIcon />
          <span>{product.quantidade}</span>
          <IncreaseIcon />
        </div>
      </div>
      <div className={styles["cart-item__price"]}>
        <span>{formatPrice(product.valor_unitario * product.quantidade)}</span>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default CartItem;
