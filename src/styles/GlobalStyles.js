import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #2E8B57;
    --secondary-color: #87CEEB;  
    --accent-color: #FFD700;
    --text-dark: #333;
    --text-light: #666;
    --white: #fff;
    --light-gray: #f8f9fa;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--white);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 1.2;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;