import styled from "styled-components";

export const MainBody = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  background-image: url(${(props) => props.bg.primary});
  @media screen and (max-width: 900px) {
    background-image: url(${(props) => props.bg.secundary});
  }
  background-size: contain;
  background-position: fixed;
  background-repeat: no-repeat;
`;
