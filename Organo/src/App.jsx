import React from 'react';
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <>
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Digite o enderço da imagem"/>
    </>
  );
}

export default App;
