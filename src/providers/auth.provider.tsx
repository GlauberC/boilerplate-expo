import React, { createContext, useCallback, useContext, useState } from 'react';

interface IUserData {
  email: string;
  password: string;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUserData | null;
  loading: boolean;
  signIn(data: ISignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUserData | null>(null);

  const signIn = useCallback(async (data: ISignInCredentials) => {
    // setLoading(true);
    setUser(data);
  }, []);

  const signOut = useCallback(async () => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
