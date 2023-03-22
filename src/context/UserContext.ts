import { createContext } from 'react';

export interface IUserContext {
  userId: string,
  setUserId(value: string): void 
  loggedIn: boolean
}

export const UserContext = createContext<IUserContext | null>(null);