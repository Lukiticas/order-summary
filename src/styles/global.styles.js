import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
    * , *::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :root{
        @media only screen and (max-width: 600px){
            font-size: 2.6vw;
        }
    }

    body {
        background-color: ${(props) => props.theme.colors.bgSecundary};
        font-family: 'Red Hat Display', sans-serif;

    }
`;

export const DefaultImg = styled.img.attrs((props) => ({
  alt: props.alt ? props.alt : "icon",
  src: props.src,
}))``;

export const DefaultBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: clamp(5em, 100%, 30em);
  padding: 1em;
  font-weight: 700;
  font-size: 1em;
  border-radius: 0.6em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background-color: transparent;
  transition: transform 400ms ease;
`;

export default GlobalStyles;
