import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

import logo from "../../assets/img/logo.png";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
