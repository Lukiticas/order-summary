import styled from "styled-components";

export const MainBody = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
`;

export const WaveBg = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg.primary});
  @media screen and (max-width: 900px) {
    background-image: url(${(props) => props.bg.secundary});
  }
  background-size: contain;
  background-position: fixed;
  background-repeat: no-repeat;
  opacity: ${(props) => (props.theme.title === "dark" ? 0.05 : 1)};
`;
