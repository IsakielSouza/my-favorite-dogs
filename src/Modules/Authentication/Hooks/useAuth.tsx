import { useContext } from 'react';

import { AuthContext } from '@Modules/Authentication/Contexts/AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}