import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * , *::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.bgPrimary};
        font-family: 'Red Hat Display', sans-serif;
        font-size: 1rem;
    }


`;

export default GlobalStyles;
