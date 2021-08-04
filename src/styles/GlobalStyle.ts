import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #FFFFFF;
    --color-primary: #64B447;
    --color-primary-transparent: rgba(100,180,71, 0.2);
    --color-primary-light: #DFEFD9;
    --color-primary-dark: #78a468;
    --color-text: #3D3D3D;
    --color-text-in-primary: #FFFFFF;
    --color-text-complement: #A3A3A2;
    --color-text-light: #C9C9C9;
    --color-red: #B4423E; 
    --color-tertiary: #EDB12A;
    --color-secondary: #464745;
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .cookieConsentContainer {
    z-index: 999;
    width: 350px;
    min-height: 20px;
    box-sizing: border-box;
    padding: 30px;
    background: #232323;
    overflow: hidden;
    position:fixed;
    bottom: 30px;
    right: 30px;
    display: none
  }
  
  .cookieConsentContainer .cookieTitle a {
    color: #fff;
    font-size: 22px;
    line-height: 20px;
    display: block
  }
  
  .cookieConsentContainer .cookieDesc p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 13px;
    line-height: 20px;
    display: block;
    margin-top: 10px
  }
  
  .cookieConsentContainer .cookieDesc a {
    color: #fff;
    text-decoration: underline
  }
    
  .cookieConsentContainer .cookieButton a {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin-top: 14px;
    background: #000;
    box-sizing: border-box;
    padding: 15px 24px;
    text-align: center;
    transition: background .3s;
  }
  
  .cookieConsentContainer .cookieButton a:hover {
    cursor: pointer;
    background: #3e9b67
  }
  
  @media (max-width: 980px){
    .cookieConsentContainer {
      bottom: 0!important;
      left: 0!important;
      width: 100%!important
    }
  }
`;
