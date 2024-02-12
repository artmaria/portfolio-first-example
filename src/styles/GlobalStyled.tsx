import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *, //c этой записи начинается вся верстка, делаем обнуление стилей
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.color.font};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
  }
  
  section {
    padding: 100px 0;
  }
  
  section:nth-of-type(odd) { //чет
    background-color: ${theme.color.secondaryBg};
  }

  section:nth-of-type(even) { //нечет
    background-color: ${theme.color.primaryBg};
  }
`