import AppProvider from '@/hooks';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default MyApp;
