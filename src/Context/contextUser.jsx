import { createContext, useState, useContext } from "react";
import clientApi from "../Services/Client/clientApi";

export const StateContext = createContext({
  user: {},
  authenticated: false,
  setUser: () => {},
  login: (email, password) => {},
  logout: () => {},
  setAuthenticated: () => {},
});
export default function ContextUser({ children }) {
  const [user, setUser] = useState({ name: "haida" });
  const [authenticated, setAuthenticated] = useState(false);
  // const login = async (email, password) => {
  //   await clientApi.getCsrf();
  //   return clientApi.login(email, password);
  // };
  const login = async (email, password) => {
    await clientApi.getCsrf();
    try {
      const response = await clientApi.login(email, password);
      if (response.status === 204) {
        // ou une autre vérification appropriée
        setAuthenticated(true); // Met à jour l'état après une connexion réussie
      }
      return response;
    } catch (error) {
      console.error("Login error: ", error);
      throw error;
    }
  };
  const logout = () => {
    setUser({});
    setAuthenticated(false);
  };
  return (
    <>
      <StateContext.Provider
        value={{
          user,
          authenticated,
          setAuthenticated,
          login,
          setUser,
          logout,
        }}
      >
        {children}
      </StateContext.Provider>
    </>
  );
}
export const useUserContext = () => useContext(StateContext);
