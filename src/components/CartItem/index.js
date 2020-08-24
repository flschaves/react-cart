import React, { useContext } from "react";

import CommentIcon from "@material-ui/icons/ModeComment";
import DeleteIcon from "@material-ui/icons/Delete";
import IncreaseIcon from "@material-ui/icons/Add";
import DecreaseIcon from "@material-ui/icons/Remove";

import formatPrice from "../../helpers/formatPrice";

import { CartContext } from "../../context/CartContext";

import styles from "./index.module.scss";

const CartItem = ({ product }) => {
  const {
    actions: { increase, decrease, removeItem, addNote },
  } = useContext(CartContext);
  
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
            product.observacao
              ? styles["cart-item__meta-observation--has-observation"]
              : ""
          }`}
        >
          <CommentIcon fontSize="small" />
          <span>
            {product.observacao ? product.observacao : "Adicionar observação"}
          </span>
        </div>
      </div>
      <div className={styles["cart-item__quantity"]}>
        <div className={styles["cart-item__quantity-selector"]}>
          <DecreaseIcon onClick={() => decrease(product)} />
          <span>{product.quantidade}</span>
          <IncreaseIcon onClick={() => increase(product)} />
        </div>
      </div>
      <div className={styles["cart-item__price"]}>
        <span>{formatPrice(product.valor_unitario * product.quantidade)}</span>
        <DeleteIcon onClick={() => removeItem(product)} />
      </div>
    </div>
  );
};

export default CartItem;
