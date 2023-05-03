import { createContext } from "react";

const ContextUser = createContext();

export function UserProvider({ children }) {
  const user = {
    nome: "herico",
    idade: "30 anos",
  };
  return <ContextUser.Provider value={user}>{children}</ContextUser.Provider>;
}

export default ContextUser;
