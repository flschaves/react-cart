import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import formatPrice from "../../helpers/formatPrice";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import styles from "./index.module.scss";

const Minicart = () => {
  const {
    state: { total },
  } = useContext(CartContext);

  return (
    <Link to="/" className={styles.minicart}>
      <ShoppingCartIcon />
      <span className={styles.minicart__price}>{formatPrice(total)}</span>
    </Link>
  );
};

export default Minicart;
