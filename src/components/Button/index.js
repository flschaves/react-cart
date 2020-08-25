import React from "react";

import styles from "./index.module.scss";

const Button = ({ style, onClick, children }) => {
  return (
    <button style={style} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
