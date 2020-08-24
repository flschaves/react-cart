import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

import styles from "./index.module.scss";

const Menu = () => {
  const [visible, toggleVisible] = useState(false);

  return (
    <div className={styles.menu}>
      <MenuIcon className={styles.menu__sandwich} onClick={() => toggleVisible(!visible)} />

      <div
        className={`${styles.menu__items} ${
          visible ? styles["menu__items--active"] : ""
        }`}
      >
        <Link to="/setores">Setores</Link>
        <Link to="/ofertas">Ofertas</Link>
      </div>
    </div>
  );
};

export default Menu;
