import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    background-color: #F0F2F5;
  }

  p {
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  
`;
