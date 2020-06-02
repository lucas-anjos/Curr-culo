import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";

function App() {
  return (
    <div className="texto">
      <div className="container">
        <Cabecalho />
        <Conteudo />
      </div>
    </div>
  );
}

export default App;
