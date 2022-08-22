import styled, { keyframes } from "styled-components";
import { DefaultImg, DefaultBtn } from "../../styles/global.styles";

const appear = keyframes`
  0% {
    transform: scale(0.7)
  }

  50% {
    transform: scale(0.85)
  }

  100% {
    transform: scale(1)
  }

`;

export const CardBody = styled.article`
  background-color: ${(props) => props.theme.colors.bgSecundary};
  max-width: 28.125rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  animation: ${appear} 400ms linear;
`;

export const HeroImg = styled(DefaultImg)`
  width: 100%;
  cursor: pointer;
  transition: transform 400ms ease;
  &:hover,
  :focus-within {
    transform: scale(1.1);
  }
`;

export const CardDetails = styled.section`
  height: 30em;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 2.8em;

  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    padding: 2.2em;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2em;
  color: ${(props) => props.theme.colors.clrSecundary};
`;

export const CardDescription = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.clrPrimary};
  line-height: 1.5;
`;

export const CardButton = styled(DefaultBtn)`
  position: relative;
  color: ${(props) =>
    props.change
      ? props.theme.colors.bgSecundary
      : props.theme.colors.clrSecundary};

  background-color: ${(props) =>
    props.change ? props.theme.colors.bgTerciary : "normal"};
  box-shadow: ${(props) => (props.change ? "normal" : "none")};

  &:hover,
  :focus-within {
    color: ${(props) => props.theme.colors.clrPrimary};
  }

  &:active {
    filter: brightness(0.9);
  }
`;
