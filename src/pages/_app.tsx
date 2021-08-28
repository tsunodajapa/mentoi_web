import CookieConsent from '@/shared/components/CookieConsent';

import AppProvider from '@/shared/hooks';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CookieConsent />
      <GlobalStyle />

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default MyApp;
