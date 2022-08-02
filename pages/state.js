import { createContext, useContext } from 'react';
import useWindowDimensions from '../components/useWindowDimensions';

const AppContext = createContext();

export function AppWrapper({ children }) {

  let height = 0
  let width = 0
  
  let sharedState = { height, width } = useWindowDimensions();

  console.log(sharedState.width)

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}