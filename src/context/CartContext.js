import React, { useReducer, useCallback } from "react";

import mercos from "../service/mercos";

const initialState = {
  cartItems: [],
  discounts: [],
  itemsCount: 0,
  subtotal: 0,
  total: 0,
  loading: true,
  error: "",
};

export const CartContext = React.createContext(initialState);

const updateQuantity = (list, quantity, id) =>
  list.map((product) => ({
    ...product,
    quantidade:
      product.id === id && product.quantidade + quantity > 0
        ? product.quantidade + quantity
        : product.quantidade,
  }));

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, cartItems: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_DISCOUNTS":
      return { ...state, discounts: action.payload };
    case "INCREASE":
      return {
        ...state,
        cartItems: updateQuantity(state.cartItems, 1, action.payload.id),
      };
    case "DECREASE":
      return {
        ...state,
        cartItems: updateQuantity(state.cartItems, -1, action.payload.id),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(
            (product) => product.id !== action.payload.id
          ),
        ],
      };
    case "ADD_NOTE":
      return { ...state, cartItems: [...state.cartItems] };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const setItems = useCallback(
    async (payload) => {
      try {
        const response = await mercos.get("/carrinho");

        dispatch({ type: "SET_ITEMS", payload: response.data });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch]
  );

  const setDiscounts = useCallback(
    async (payload) => {
      try {
        const response = await mercos.get("/politicas-comerciais");

        dispatch({ type: "SET_DISCOUNTS", payload: response.data });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [dispatch]
  );

  const increase = useCallback(
    (payload) => {
      dispatch({ type: "INCREASE", payload });
    },
    [dispatch]
  );

  const decrease = useCallback(
    (payload) => {
      dispatch({ type: "DECREASE", payload });
    },
    [dispatch]
  );

  const removeItem = useCallback(
    (payload) => {
      dispatch({ type: "REMOVE_ITEM", payload });
    },
    [dispatch]
  );

  const addNote = useCallback(
    (payload) => {
      dispatch({ type: "ADD_NOTE", payload });
    },
    [dispatch]
  );

  const actions = {
    setItems,
    setDiscounts,
    removeItem,
    increase,
    decrease,
    addNote,
  };

  return (
    <CartContext.Provider value={{ state, actions }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
