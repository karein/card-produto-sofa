import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --background: #D9CDF7;
    --text: #271A45;
  }

  * {
    margin: auto;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--background);
    --webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.5;
    cursor: not-allowed;
  }
`