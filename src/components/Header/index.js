import React from "react";
import TopBar from "../TopBar";

import logo from "./logo.png";

const Header = () => {
	return (
		<header>
			<div className="container">
				<TopBar />
				<img src={logo} alt="Logo" />
			</div>
		</header>
	);
};

export default Header;
