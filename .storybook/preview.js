import { mswDecorator } from 'msw-storybook-addon';
import { setConfig } from 'next/config';
import { RouterContext } from 'next/dist/shared/lib/router-context'; // next 12

import nextConfig from '../next.config';
import GlobalStyle from '../src/GlobalStyle';
import GlobalContextProvider from '../src/context/GlobalContext';

setConfig({ publicRuntimeConfig: nextConfig.publicRuntimeConfig });

// Initialize MSW
if (typeof global?.process === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('../src/mocks/browser');
  worker.start();
}

const globalStateDecorator = (Story) => {
  const state = {
    session: {
      userId: 1,
      language: 'de',
    },
  };

  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider initialState={state}>
        <Story />
      </GlobalContextProvider>
    </>
  );
};

export const decorators = [mswDecorator, globalStateDecorator];

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
