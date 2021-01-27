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
  }
  
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto';
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
