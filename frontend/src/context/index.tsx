import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { CONTEXT_USER_DETAILS } from '../utils/constants';

interface ContextProps {
  children: ReactNode;
}

export interface UserDetails {
  id: number;
  userName: string | null;
  balance: number | null;
  token: string | null;
  authenticated?: boolean;
  email?: string;
}

// Define the shape of the context
export interface MinetContextProps {
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
  networkError: boolean;
  setNetworkError: React.Dispatch<React.SetStateAction<boolean>>;
}

// Initialize the context with a compatible default value
export const MinetStore = createContext<MinetContextProps | undefined>(
  undefined
);

const ContextProvider = ({ children }: ContextProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails>(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
    return storedUserDetails
      ? JSON.parse(storedUserDetails)
      : CONTEXT_USER_DETAILS;
  });

  const [networkError, setNetworkError] = useState<boolean>(false);

  useEffect(() => {
    if (userDetails) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    } else {
      localStorage.removeItem('user');
    }
  }, [userDetails]);

  const values = useMemo(
    () => ({
      userDetails,
      setUserDetails,
      networkError,
      setNetworkError,
    }),
    [networkError, userDetails]
  );

  return <MinetStore.Provider value={values}>{children}</MinetStore.Provider>;
};

// Custom hook for easy access to context
export const useUserContext = () => {
  const context = useContext(MinetStore);
  if (!context)
    throw new Error('useUserContext must be used within ContextProvider');
  return context;
};

export default ContextProvider;
