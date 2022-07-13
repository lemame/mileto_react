import { createContext } from 'react';
import { login } from '../services/Login';

interface AuthContextData {
  signed: boolean;
  login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ signed: true, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
