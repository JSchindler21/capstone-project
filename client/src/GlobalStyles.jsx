import { createGlobalStyle } from "styled-components";
import globe from "./images/globe_wallpaper.jpg"
export default createGlobalStyle` 


*,
*::before,
*::after {
    box-sizing: border-box;
}

:root {
--primary: #A6C8B0;
--secondary: #6B6969;
--third: #3b3838; 
--black: black; 
--white: white; 
--active: #284631;
}


body {
    font-family: 'Courgette', cursive;
    margin: 0;
    background-image: url(${globe}) ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
}

h1, h2, h3, h4 {
    margin: 0;
    }

 ul,li{
    list-style:none;
    padding: 0;
    margin: 0;
 }
header{
    color: var(--secondary);
    font-size: 2rem;
    text-shadow: 0 4px 2px var(--primary);
}

`;
