// Global context contains app wise state data such as theme, feature flags, language etc.
// You can add more providers to make app work with required providers such as
// localisation provider from react-intl design system provider which applies themes to the components.
// This state management solution is for small apps with simple states,
// consider using redux or react-query in a bigger and more complex app.

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createContext, useContext, useState, ReactNode } from 'react';

import theme from '../../theme';

import { GlobalContextState } from './types';

const muiTheme = createTheme(theme);

const GlobalContext = createContext<GlobalContextState>({});

const GlobalContextProvider = ({
  initialState,
  children,
}: {
  initialState: GlobalContextState;
  children: ReactNode;
}) => {
  if (!initialState) {
    throw new Error('initialState prop is required, in order to render GlobalContextProvider');
  }
  const [state] = useState(initialState);
  return (
    <ThemeProvider theme={muiTheme}>
      <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
    </ThemeProvider>
  );
};

export const useGlobalContext = (): GlobalContextState =>
  useContext<GlobalContextState>(GlobalContext);

export default GlobalContextProvider;
