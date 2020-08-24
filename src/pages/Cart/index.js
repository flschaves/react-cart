import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import CartList from "../../components/CartList";
import CartResume from "../../components/CartResume";

import { CartContext } from "../../context/CartContext";

import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./index.module.scss";

const Cart = () => {
  const {
    state: { loading, error },
    actions: { setItems, setDiscounts },
  } = useContext(CartContext);

  useEffect(() => {
    setItems();
    setDiscounts();
  }, [setItems, setDiscounts]);

  return (
    <Layout title="Carrinho">
      {error !== "" ? (
        error
      ) : (
        <div className={styles["page-cart"]}>
          <div className={styles["page-cart__list"]}>
            {loading === true ? (
              <CircularProgress fontSize="small" />
            ) : (
              <CartList />
            )}
          </div>
          <div className={styles["page-cart__resume"]}>
            <CartResume />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
