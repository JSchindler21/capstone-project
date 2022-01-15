import { createGlobalStyle } from "styled-components";
export default createGlobalStyle` 

*,
*::before,
*::after {
    box-sizing: border-box;
}

:root {
--primary: #A6C8B0;
--secondary: #6B6969;
--black: black; 
--white: white; 
}


body {
    font-family: 'Courgette', cursive;
    margin: 0;
    
}

h1, h2, h3, h4 {
    margin: 0;
    }

 ul,li{
    list-style:none;
    padding: 0;
    margin: 0;
 }

`;
