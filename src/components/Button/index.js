import React from "react";

import styles from "./index.module.scss";

const Button = ({ style, children }) => {
  return (
    <button style={style} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
