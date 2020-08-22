import React from "react";
import TopBar from "../TopBar";
import Logo from "../Logo";

const Header = () => {
	return (
		<header>
			<div className="container">
				<TopBar />
				<Logo />
			</div>
		</header>
	);
};

export default Header;
