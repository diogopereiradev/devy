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
    overflow: hidden;
  }

  button, a, ul, ol, input, textarea, select, option {
    border: none;
    resize: none;
    text-decoration: none;
    list-style-type: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #22232e;
  }

  .animateSeconds {
    animation: secondsPointerRotate 10s infinite;
  }

  .animateMinutes {
    animation: minutesPointerRotate 120s infinite;
  }
`;