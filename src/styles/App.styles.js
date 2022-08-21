import styled from "styled-components";

export const MainBody = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
`;

export const BgImage = styled.picture`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  z-index: -1;

  img {
    width: 100%;
  }
`;
