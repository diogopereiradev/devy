import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  body {
    font-family: Roboto;
    font-weight: 500;
    font-size: 10rem;
    color: #dddddd;
    background-color: #363849;
  }

  button, a, ul, ol, input, textarea {
    border: none;
    resize: none;
    text-decoration: none;
    list-style-type: none;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-justify-center {
    display: flex;
    justify-content: center;
  }

  .flex-align-center {
    display: flex;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #262738;
  }
`;