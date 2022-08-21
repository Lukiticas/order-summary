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
            font-size: 2.9vw;
        }
    }

    body {
        background-color: ${(props) => props.theme.colors.bgPrimary};
        font-family: 'Red Hat Display', sans-serif;


    }


`;

export const DefaultImg = styled.img.attrs((props) => ({
  label: "",
  src: props.src,
}))``;

export const DefaultBtn = styled.button`
  width: clamp(5em, 100%, 30em);
  font-weight: 700;
  font-size: 1em;
  padding: 1em;
  background-color: transparent;
  border: none;
  border-radius: 0.6em;
  outline: none;
  cursor: pointer;
  transition: color 200ms ease-in;
  transition: background-color 200ms ease-in;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  &:hover {
  }
`;

export default GlobalStyles;
