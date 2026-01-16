import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  addPoints: (effortPoints: number, timePoints: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function addPoints(effortPoints: number, timePoints: number) {
    if (!currentUser) return;

    setCurrentUser({
      ...currentUser,
      effortPoints: currentUser.effortPoints + effortPoints,
      timePoints: currentUser.timePoints + timePoints,
    });
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, addPoints }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
