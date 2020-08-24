import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";

import CartContextProvider from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
