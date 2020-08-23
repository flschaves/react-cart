import React from "react";
import TopBar from "../TopBar";
import Logo from "../Logo";
import NavBar from "../NavBar";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <TopBar />
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
