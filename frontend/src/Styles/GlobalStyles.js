import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --lightest-slate: #ccd6f6;
    --pink: pink;
    --gold: gold;
  }

  html {
    box-sizing: border-box;
    width: 100%
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  } 

`;

export default GlobalStyle;
