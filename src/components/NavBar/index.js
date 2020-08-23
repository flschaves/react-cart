import React from "react";
import Menu from "../Menu";
import SearchForm from "../SearchForm";
import Minicart from "../Minicart";

import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__menu"]}>
        <Menu />
      </div>
      <div className={styles["navbar__shopping-cart"]}>
        <Minicart />
      </div>
      <div className={styles["navbar__searchform"]}>
        <SearchForm />
      </div>
    </div>
  );
};

export default NavBar;
