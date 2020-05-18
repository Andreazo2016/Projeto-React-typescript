import { createGlobalStyle } from 'styled-components';
import githubbackground from '../assets/github-background.svg';


export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

body{
    background:#f0f0f5  url(${githubbackground}) no-repeat 70% top;
}

body,-moz-user-input,button{
    font: 16px sans-serif;
}

#root{
    max-width: 960px;
    margin: 0 auto; /*Centraliza a div root  */
    padding:40px 20px;/*Dá espaço cima e baixo na página */
}

button{
    cursor: pointer;
}

`