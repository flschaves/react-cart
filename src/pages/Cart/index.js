import React from "react";
import Layout from "../../components/Layout";
import CartList from "../../components/CartList";
import CartResume from "../../components/CartResume";

import styles from "./index.module.scss";

const Cart = () => {
  return (
    <Layout title="Carrinho">
      <div className={styles["page-cart"]}>
        <div className={styles["page-cart--list"]}>
          <CartList />
        </div>
        <div className={styles["page-cart--resume"]}>
          <CartResume />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
