import React, { useContext } from "react";
import ContextState from "../../context/ContextState";

export default function Botao() {
  const [dados, setDados] = useContext(ContextState);

  return (
    <div>
      <h6>{dados.nome}</h6>
      <h6>{dados.idade}</h6>
      <button onClick={() => setDados({ nome: "lima", idade: "29" })} />
    </div>
  );
}
