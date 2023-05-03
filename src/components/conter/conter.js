import React, { useContext } from "react";
import ContextUser from "../context/Context";
import Botao from "./botao/botao";
export default function Counter() {
  const user = useContext(ContextUser);
  return (
    <div>
      <Botao />
      <h3>{user.idade}</h3>
    </div>
  );
}
