import { createGlobalStyle } from "styled-components";
import mainBackground from "./../Assets/background.png";
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
      
    }
    :root {
        --white: #ffffff;
        --background-color:#dfe6e9;
        --main-blue: #3498db;
    }
    body{
        background-image: url(${mainBackground});
        background-repeat: no-repeat;
        background-size: 100vw 1500px;
        background-position: center
        font-family: "Poppins", sans-serif;
        min-width: 320px;
        width: 100%;
        height: 100%;
        font-family: sans-serif;
        letter-spacing: 0.3px;
    }

    h1,h2,h3,h4,h5{
        font-family: "Poppins", sans-serif;
        font-weight: 200;
    }

    input, button {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`;
