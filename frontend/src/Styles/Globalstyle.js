import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --lightest-slate: #ccd6f6;
    --pink: pink;
    --gold: gold;

    --nav-width-collapsed:4rem;
    --nav-width-open:10rem;
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

  body  {
    min-height: 100vh;
    background-color: lightblue;
  }
`;

export default GlobalStyle;
