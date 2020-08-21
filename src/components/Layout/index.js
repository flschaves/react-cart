import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import TopBar from "../TopBar";

const Layout = ({ title, children }) => {
	return (
		<>
			<Header />
			<TopBar />
			<main className="container">
				<h1>{title}</h1>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
