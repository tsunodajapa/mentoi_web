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
    --color-secondary: #464745;
    --color-tertiary: #EDB12A;

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
`;
