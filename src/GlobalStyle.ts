import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* reset */
  body, html {
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
  }

  /* override material ui */
  .MuiInputBase-root {
    height: 100%;
  }
`;

export default GlobalStyle;
