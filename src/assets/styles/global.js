import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Montserrat'; 
  }

  body {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
