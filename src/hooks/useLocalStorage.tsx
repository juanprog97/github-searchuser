import { useState } from 'react';

const useLocalStorage = <T,>(key: string, initialState: T) => {
  const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  const initial = storedValue ? (JSON.parse(storedValue) as T) : initialState;
  const [state, setState] = useState<T>(initial);

  const returnedNewState = (newState: T) => {
    setState(newState);
    localStorage.setItem(key, JSON.stringify(newState));
  };

  return [state, returnedNewState] as const;
};

export default useLocalStorage;
