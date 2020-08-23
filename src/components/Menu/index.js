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
        className={`${styles.menu__itens} ${
          visible ? styles["menu__itens--active"] : ""
        }`}
      >
        <Link to="/setores">Setores</Link>
        <Link to="/ofertas">Ofertas</Link>
      </div>
    </div>
  );
};

export default Menu;
