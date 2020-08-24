import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import CartList from "../../components/CartList";
import CartResume from "../../components/CartResume";

import { CartContext } from "../../context/CartContext";

import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "./index.module.scss";

const Cart = () => {
  const {
    state: { cartItens, discounts },
    actions: { getItens, getDiscounts },
  } = useContext(CartContext);

  useEffect(() => {
    getItens();
    getDiscounts();
  }, [getItens, getDiscounts]);

  console.log(discounts);
  return (
    <Layout title="Carrinho">
      <div className={styles["page-cart"]}>
        <div className={styles["page-cart--list"]}>
          {cartItens.length === 0 ? <CircularProgress fontSize="small" /> : <CartList />}
        </div>
        <div className={styles["page-cart--resume"]}>
          {discounts.length === 0 ? <CircularProgress fontSize="small" /> : <CartResume />}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
