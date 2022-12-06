import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: inherit;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    list-style: none;
    border: none;
    font-family: 'Source Sans Pro', sans-serif;
    }

    html  {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 768px) {
      font-size: 80%
    }
    @media(max-width: 480px) {
      font-size: 70%
    }
  }

`;
