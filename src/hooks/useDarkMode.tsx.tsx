import { DarkModeContext } from '@/context';
import { useContext } from 'react';

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be inside DarkModeProvide');
  }
  return context;
};

export default useDarkMode;
