import React, { useReducer, useCallback } from "react";
import getCartTotals from "../helpers/getCartTotals";
import mercos from "../service/mercos";

const initialState = {
  cartItems: [],
  discountPolicy: [],
  itemsCount: 0,
  subtotal: 0,
  discount: 0,
  total: 0,
  loading: true,
  error: "",
  checkoutSuccess: false,
};

export const CartContext = React.createContext(initialState);

const updateQuantity = (cartItems, id, quantity) =>
  cartItems.map((product) => ({
    ...product,
    quantidade:
      product.id === id && product.quantidade + quantity > 0
        ? product.quantidade + quantity
        : product.quantidade,
  }));

const updateObservation = (cartItems, id, observation) =>
  cartItems.map((product) => ({
    ...product,
    observacao: product.id === id ? observation : "",
  }));

const updateCart = (cartItems, discountPolicy) => {
  return {
    cartItems,
    ...getCartTotals(cartItems, discountPolicy),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        ...updateCart(action.payload, state.discountPolicy),
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_DISCOUNT_POLICY":
      return {
        ...state,
        discountPolicy: action.payload,
      };
    case "INCREASE":
      return {
        ...state,
        ...updateCart(
          updateQuantity(state.cartItems, action.payload.id, 1),
          state.discountPolicy
        ),
      };
    case "DECREASE":
      return {
        ...state,
        ...updateCart(
          updateQuantity(state.cartItems, action.payload.id, -1),
          state.discountPolicy
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        ...updateCart(
          [
            ...state.cartItems.filter(
              (product) => product.id !== action.payload.id
            ),
          ],
          state.discountPolicy
        ),
      };
    case "SET_OBSERVATION":
      return {
        ...state,
        ...updateCart(
          updateObservation(
            state.cartItems,
            action.payload.product.id,
            action.payload.observation
          ),
          state.discountPolicy
        ),
      };
    case "SET_CHECKOUT_SUCCESS":
      return {
        ...state,
        checkoutSuccess: true,
      };
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

  const setDiscountPolicy = useCallback(
    async (payload) => {
      try {
        const response = await mercos.get("/politicas-comerciais");

        dispatch({ type: "SET_DISCOUNT_POLICY", payload: response.data });
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

  const setObservation = useCallback(
    (payload) => {
      dispatch({ type: "SET_OBSERVATION", payload });
    },
    [dispatch]
  );

  const handleCheckout = useCallback(
    async (payload) => {
      try {
        const response = await mercos.post("/carrinho", payload);

        dispatch({ type: "SET_CHECKOUT_SUCCESS", payload: response.data });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      }
    },
    [dispatch]
  );

  const actions = {
    setItems,
    setDiscountPolicy,
    removeItem,
    increase,
    decrease,
    setObservation,
    handleCheckout,
  };

  return (
    <CartContext.Provider value={{ state, actions }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
