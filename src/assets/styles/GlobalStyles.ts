import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  :root{
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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