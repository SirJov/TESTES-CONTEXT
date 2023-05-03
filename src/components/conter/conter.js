import React, { useContext } from "react";
import ContextUser from "../context/Context";
export default function Counter() {
  const user = useContext(ContextUser);
  return (
    <div>
      <h3>{user.idade}</h3>
    </div>
  );
}
