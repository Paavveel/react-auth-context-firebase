import { createContext, useContext } from 'react';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const signUp = () => {};
  const signIn = () => {};
  const signOut = () => {};
  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
