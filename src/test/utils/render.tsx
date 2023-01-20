import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

import GlobalContextProvider from '../../context/GlobalContext';
import { globalContextState } from '../../mocks/context';
const Wrapper = ({ children }) => (
  <GlobalContextProvider initialState={globalContextState}>{children}</GlobalContextProvider>
);

const renderWithProviders = (ui: ReactElement, options: RenderOptions = {}, props = {}) =>
  render(ui, { wrapper: () => <Wrapper {...props}>{ui}</Wrapper>, ...options });

export default renderWithProviders;
