import React, {useEffect, useState} from 'react';
import { IValidateToken } from '../interfaces/IValidateToken';
import { requestApi } from '../services';
import { UserContext } from './UserContext';

interface UserContextProps {
  children: React.ReactNode
}

const UserProvider: React.FC<UserContextProps> = ({children}) => {
  const [userId, setUserId] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const validateToken = async () => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
    if (accessToken) {
      try {
        const {data} = await requestApi<IValidateToken>({method: 'get', url: '/auth/validate_token', headers: {...accessToken}});
        setUserId(data.data.id);
        setLoggedIn(true);
      } catch {
        localStorage.removeItem('accessToken');
        setLoggedIn(false);
      }
    }
  };
  
  useEffect(() => {
    validateToken();
  }, []);

  const store = {
    userId,
    setUserId,
    loggedIn,
    setLoggedIn,
    validateToken
  };


  return (
    <UserContext.Provider value={store}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

