import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  :root{
    --primary: #36393F;
    --secondary: #2F3136;
    --senary: #828386;

    --background: #C8C8C6;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html, body, #root{
    height: 100%;
  }

  p, a, button, input{
    border: 0;
    outline: 0;
    font-family: 'Grenze', serif;
  }

  h1, h2, h3{
    font-family: 'Tomorrow', sans-serif;
  }
`