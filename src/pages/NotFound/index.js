import React from "react";
import Layout from "../../components/Layout";

const NotFound = () => {
  return (
    <Layout title="Ops, conteúdo não encontrado!">
      <p style={{ textAlign: "center" }}>
        Parece que o conteúdo que você está buscando não existe!
      </p>
    </Layout>
  );
};

export default NotFound;
