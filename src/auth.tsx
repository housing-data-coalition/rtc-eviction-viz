
import React from "react";
import useCookie from "react-use-cookie";

interface AuthContextType {
  isAuthenticated: string;
  signin: (password: string, callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [isAuthenticated, setAuthentication] = useCookie("auth", "");

  let signin = (password: string, callback: VoidFunction) => {
    setAuthentication(password);
    callback();
  };

  let value = { isAuthenticated, signin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
