/* eslint-disable */

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<{
    styles: JSX.Element;
    html: string;
    head?: JSX.Element[];
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" content="text/html" />
          <meta name="theme-color" content="#64B447" />
          <meta property="og:site_name" content="Mentoi" />
          <meta httpEquiv="content-language" content="pt-br" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#64b447" />
          <meta name="msapplication-TileColor" content="#ffffff" />

          {/* <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
            
          <script 
            dangerouslySetInnerHTML={{
              __html: `  
                window.OneSignal = window.OneSignal || [];
                OneSignal.push(function() {
                  OneSignal.init({
                    appId: "18825cdf-5ebb-4fca-9418-c8e526aa108d",
                    safari_web_id: "web.onesignal.auto.5f80e2fb-b063-4ecb-90f7-0c7e45de9678",
                    notifyButton: {
                      enable: true,
                    },
                  });
                });`
            }}
          /> */}
          
         

          <script charSet="UTF-8" src="//web.webpushs.com/js/push/41f453f02544f42b84fb5a0d2a49d2ed_1.js" async></script>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}