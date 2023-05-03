import React, { useState } from "react";
import Counter from "./components/conter/conter";
import ContextState from "./components/context/ContextState";

export default function App() {
  const [dados, setDados] = useState(0);
  console.log(dados + "  App");
  return (
    <div>
      <p>aaaa</p>
      <p> DevMedia Context API</p>
      <ContextState.Provider value={[dados, setDados]}>
        <Counter />
      </ContextState.Provider>
    </div>
  );
}
