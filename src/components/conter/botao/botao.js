import React, { useContext } from "react";
import ContextState from "../../context/ContextState";

export default function Botao() {
  const [dados, setDados] = useContext(ContextState);

  return (
    <div>
      <h6>{dados}</h6>
      <button onClick={() => setDados(dados + 1)} />
    </div>
  );
}
