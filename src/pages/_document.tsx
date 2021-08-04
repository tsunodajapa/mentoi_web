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

          <script 
            dangerouslySetInnerHTML={{
              __html: `var STONLY_WID = "88513ee3-e2c1-11eb-8dbf-062882f67cfe";`
            }}
          />
          
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(s,t,o,n,l,y,w,g){s.StonlyWidget||((w=s.StonlyWidget=function(){
                w._api?w._api.apply(w,arguments):w.queue.push(arguments)}).queue=[],(y=t.createElement(o)).async=!0,
                (g=new XMLHttpRequest).open("GET",n+"version?v="+Date.now(),!0),g.onreadystatechange=function(){
                4===g.readyState&&(y.src=n+"stonly-widget.js?v="+(200===g.status?g.responseText:Date.now()),
                (l=t.getElementsByTagName(o)[0]).parentNode.insertBefore(y,l))},g.send())
                }(window,document,"script","https://stonly.com/js/widget/v2/");`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `var purecookieTitle="Cookies",purecookieDesc="Este site utiliza cookies para te proporcionar uma melhor experiência. Ao continuar navegando, você aceita nossa",purecookieLink='<a href="/privacy-policy/" target="_blank">Política de Privacidade</a>',purecookieButton="Confirmar";function pureFadeIn(e,o){var i=document.getElementById(e);i.style.opacity=0,i.style.display=o||"block",function e(){var o=parseFloat(i.style.opacity);(o+=.02)>1||(i.style.opacity=o,requestAnimationFrame(e))}()}function pureFadeOut(e){var o=document.getElementById(e);o.style.opacity=1,function e(){(o.style.opacity-=.02)<0?o.style.display="none":requestAnimationFrame(e)}()}function setCookie(e,o,i){var t="";if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),t="; expires="+n.toUTCString()}document.cookie=e+"="+(o||"")+t+"; path=/"}function getCookie(e){for(var o=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}function eraseCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}function cookieConsent(){getCookie("purecookieDismiss")||(document.body.innerHTML+='<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>'+purecookieTitle+'</a></div><div class="cookieDesc"><p>'+purecookieDesc+" "+purecookieLink+'</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">'+purecookieButton+"</a></div></div>",pureFadeIn("cookieConsentContainer"))}function purecookieDismiss(){setCookie("purecookieDismiss","1",30),pureFadeOut("cookieConsentContainer")}window.onload=function(){cookieConsent()};`
            }}
          />
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