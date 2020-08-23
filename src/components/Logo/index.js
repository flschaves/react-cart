import React from "react";

import styles from "./index.module.scss";

import logo from "../../assets/img/logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
