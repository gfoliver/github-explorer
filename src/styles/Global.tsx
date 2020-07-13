import { createGlobalStyle } from 'styled-components'
import backgroundImg from '../assets/background.svg'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        width: 100%;
        font-family: 'Roboto', sans-serif;
    }

    input, button, textarea {
        font-family: 'Roboto', sans-serif;

        &:focus, &:active {
            outline: none;
        }
    }

    button {
        cursor: pointer;
    }

    .App {
        background-color: #F0F0F5;
        min-height: 100vh;
        color: #3D3D4D;
        background-image: url(${backgroundImg});
        background-position: 60% -5%;
        background-repeat: no-repeat;
        padding-bottom: 50px;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 15px;
    }
`