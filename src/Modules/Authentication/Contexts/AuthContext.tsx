import { createContext, ReactNode, useState } from "react";

import { UserDTO } from "../Dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  
  const [user, setUser] = useState({
    id: '1',
    name: 'isakiel',
    email: 'isakiel@mail.com',
    avatar: '',
  });

  function signIn(email: string, password: string) {
    setUser({
        id: '',
        name: '',
        email,
        avatar: '',
    })
  };

  return (
    <AuthContext.Provider value={{ user, signIn: signIn }}>
      {children}
    </AuthContext.Provider>
  );
}  