import React, { useReducer, useCallback } from "react";

import mercos from "../service/mercos";

const initialState = {
  cartItens: [],
  discounts: [],
};

const actions = {};

export const CartContext = React.createContext({ initialState, actions });

const CartReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITENS":
      return { ...state, cartItens: action.payload };
    case "GET_DISCOUNTS":
      return { ...state, discounts: action.payload };
    case "GET_SUBTOTAL":
      return { ...state, cartItens: action.payload };
    case "GET_TOTAL":
      return { ...state, cartItens: action.payload };
    case "GET_TOTAL_ITENS":
      return { ...state, cartItens: action.payload };
    case "INCREASE":
      return { ...state, cartItens: action.payload };
    case "DECREASE":
      return { ...state, cartItens: action.payload };
    case "ADD_ITEM":
      return { ...state, cartItens: action.payload };
    case "REMOVE_ITEM":
      return { ...state, cartItens: action.payload };
    case "ADD_NOTE":
      return { ...state, cartItens: action.payload };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const getItens = useCallback(
    async (payload) => {
      const response = await mercos.get("/carrinho");

      dispatch({ type: "GET_ITENS", payload: response.data });
    },
    [dispatch]
  );

  const getDiscounts = useCallback(
    async (payload) => {
      const response = await mercos.get("/politicas-comerciais");

      dispatch({ type: "GET_DISCOUNTS", payload: response.data });
    },
    [dispatch]
  );

  const getSubtotal = (payload) => {
    dispatch({ type: "GET_TOTAL", payload });
  };

  const getTotal = (payload) => {
    dispatch({ type: "GET_SUBTOTAL", payload });
  };

  const getTotalItens = (payload) => {
    dispatch({ type: "GET_TOTAL_ITENS", payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const addNote = (payload) => {
    dispatch({ type: "ADD_NOTE", payload });
  };

  const contextValues = {
    getItens,
    getDiscounts,
    getSubtotal,
    getTotal,
    getTotalItens,
    removeProduct,
    increase,
    decrease,
    addNote,
  };

  return (
    <CartContext.Provider value={{ state, actions: { ...contextValues } }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
