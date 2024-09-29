import { useLocalStorage } from '@/hooks';
import React, { createContext, useState, useEffect, ReactNode } from 'react';

/**
 * UseDarkMode
 * @property {AllowedState} isDarkMode - state darkmode.
 * @property {Function} toggleDarkMode - toogleDarkMode
 */
interface DarkModeContextProps {
  isDarkMode: boolean;
  stateTheme: AllowedState;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

type AllowedState = 'dark' | 'light';

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stateTheme, setThemeMode] = useLocalStorage<AllowedState | (() => AllowedState)>('theme', () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else return 'light';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(stateTheme == 'dark');

  useEffect(() => {
    if (stateTheme == 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [stateTheme]);

  const toggleDarkMode = () => {
    const newMode = stateTheme == 'dark' ? 'light' : 'dark';
    setIsDarkMode(newMode === 'dark');
    setThemeMode(newMode);
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        stateTheme: stateTheme as AllowedState,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
