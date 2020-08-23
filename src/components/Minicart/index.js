import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import styles from "./index.module.scss";

const Minicart = () => {
  return (
    <Link to="/" className={styles.minicart}>
      <ShoppingCartIcon />
      <span className={styles.minicart__price}>R$ 62,50</span>
    </Link>
  );
};

export default Minicart;
