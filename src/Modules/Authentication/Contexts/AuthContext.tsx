import { createContext } from "react";
import { UserDTO } from "../Dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);