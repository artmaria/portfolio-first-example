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
    
    min-width: 360px; //ширина минимального экрана, устанавливаем, чтобы даже при меньших экранах все было ок 
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
    cursor: pointer;
    color: ${theme.color.font};
  }
  
  section {
    padding: 100px 0;
    
    @media ${theme.media.mobile} {
      padding: 80px 0;
      
      
    }
  }
  
  section:nth-of-type(odd) { //чет
    background-color: ${theme.color.secondaryBg};
  }

  section:nth-of-type(even) { //нечет
    background-color: ${theme.color.primaryBg};
  }
  
  h3 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
  
  a {
    color: ${theme.color.font};
  }
`

