import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

import { CartContext } from "../../context/CartContext";

import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./index.module.scss";

const Checkout = () => {
  const {
    state: { cartItems, itemsCount, loading, error, checkoutSuccess },
    actions: { handleCheckout },
  } = useContext(CartContext);

  const [street, setStreet] = useState("");
  const [neighbor, setNeighbor] = useState("");
  const [number, setNumber] = useState("");
  const [card, setCard] = useState("");
  const [cvc, setCvc] = useState("");

  const [validate, setValidate] = useState(false);

  const handlePayment = () => {
    setValidate(true);

    const isValid = ![street, neighbor, number, card, cvc].some(
      (value) => value === ""
    );

    if (isValid) {
      handleCheckout({
        itens: cartItems,
        endereco: {
          rua: street,
          bairro: neighbor,
          numero: number,
        },
        cartao: {
          numero: card,
          cvc: cvc,
        },
      });
    }
  };

  if (itemsCount === 0) {
    return <Redirect to="/" />;
  }

  return (
    <Layout title="Checkout">
      <div className={styles["page-checkout"]}>
        <div className={styles["page-checkout__alerts"]}>
          {error !== "" ? <Alert severity="error">{alert}</Alert> : null}
          {checkoutSuccess === true ? (
            <Alert severity="success">Pedido criado com sucesso!</Alert>
          ) : null}
        </div>
        <div className={styles["page-checkout__billing"]}>
          <h2>Endereço</h2>
          <form autoComplete="off">
            <TextField
              error={validate === true && street === "" ? true : false}
              value={street}
              onChange={(event) => setStreet(event.target.value)}
              fullWidth
              label="Rua"
            />
            <TextField
              error={validate === true && neighbor === "" ? true : false}
              value={neighbor}
              onChange={(event) => setNeighbor(event.target.value)}
              fullWidth
              label="Bairro"
            />
            <TextField
              error={validate === true && number === "" ? true : false}
              value={number}
              onChange={(event) => setNumber(event.target.value)}
              fullWidth
              label="Número"
            />
          </form>
        </div>
        <div className={styles["page-checkout__payment"]}>
          <h2>Cartão</h2>
          <form autoComplete="off">
            <TextField
              error={validate === true && card === "" ? true : false}
              value={card}
              onChange={(event) => setCard(event.target.value)}
              fullWidth
              label="Cartão"
            />
            <TextField
              error={validate === true && cvc === "" ? true : false}
              value={cvc}
              onChange={(event) => setCvc(event.target.value)}
              fullWidth
              label="Número"
            />
          </form>
          {loading === true ? (
            <CircularProgress fontSize="small" />
          ) : (
            <Button style={{ width: "100%" }} onClick={() => handlePayment()}>
              Finalizar e Pagar
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
