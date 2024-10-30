import { UserDetails } from 'context';
import React, { createContext, useState } from 'react';

interface ContextProps {
  children: React.ReactNode;
}

interface MiContextProps {
  userDetails: UserDetails;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>;
  purchaseDetails: string;
  setPurchaseDetails: React.Dispatch<React.SetStateAction<string>>;
}

export const MinetStore = createContext<MiContextProps | undefined>(undefined);

const ContextProvider = ({ children }: ContextProps) => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    id: NaN,
    userName: null,
    balance: null,
    token: null,
  });

  const [purchaseDetails, setPurchaseDetails] = useState('');

  return (
    <MinetStore.Provider
      value={{
        userDetails,
        setUserDetails,
        purchaseDetails,
        setPurchaseDetails,
      }}
    >
      {children}
    </MinetStore.Provider>
  );
};

export default ContextProvider;
