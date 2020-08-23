import React from "react";
import Header from "../Header";
import InfoBar from "../InfoBar";
import Footer from "../Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Header />
      <InfoBar />
      <main className="container">
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
