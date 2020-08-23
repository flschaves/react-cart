import React from "react";
import TopBar from "../TopBar";
import Logo from "../Logo";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <TopBar />
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
