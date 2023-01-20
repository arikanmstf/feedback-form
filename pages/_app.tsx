// using custom app to do the repetitive work, such as fetching session data etc.
// GuessBookApp.getInitialProps fetches the data required for all pages.
// App.getInitialProps on the other hand fetches component specific server side data and passes to props
// note that custom apps can not fetch server side data with: "App.getServerSideProps"
// see: https://github.com/vercel/next.js/discussions/13199#discussioncomment-17276

import App, { AppContext, AppProps } from 'next/app';

import GlobalStyle from '../src/GlobalStyle';
import GlobalContextProvider, {
  GlobalContextState,
  SessionData,
} from '../src/context/GlobalContext';
import { getUserAttributes } from '../src/services/session';

type CustomContext = AppContext & { ctx: { res: { locals: { session: SessionData } } } };
type CustomProps = { initialState: GlobalContextState };
type GuessBookAppProps = AppProps & CustomProps;

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  require('../src/mocks');
}

const GuessBookApp = ({ Component, initialState, pageProps }: GuessBookAppProps) => {
  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider initialState={initialState}>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  );
};

GuessBookApp.getInitialProps = async (
  appContext: AppContext & CustomContext,
): Promise<CustomProps> => {
  const [session, componentData] = await Promise.all([
    getUserAttributes(),
    App.getInitialProps(appContext),
  ]);

  return { initialState: { session }, ...componentData };
};

export default GuessBookApp;
