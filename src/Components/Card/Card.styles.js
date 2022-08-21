import styled from "styled-components";
import { DefaultImg, DefaultBtn } from "../../styles/global.styles";

export const CardBody = styled.article`
  background-color: ${(props) => props.theme.colors.bgSecundary};
  max-width: 28.125rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const HeroImg = styled(DefaultImg)`
  width: 28.125em;
`;

export const CardDetails = styled.section`
  height: 29em;
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
`;

export const CardDescription = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.clrPrimary};
  line-height: calc(1.5 * 1rem);
`;

export const CardButton = styled(DefaultBtn)`
  transition: filter 100ms ease-in;
  position: relative;

  color: ${(props) =>
    props.change ? props.theme.colors.bgSecundary : "normal"};

  background-color: ${(props) =>
    props.change ? props.theme.colors.bgTerciary : "normal"};

  box-shadow: ${(props) => (props.change ? "normal" : "none")};

  &:hover {
    filter: saturate(0.8);
    color: ${(props) =>
      props.change
        ? props.theme.colors.bgSecundary
        : props.theme.colors.bgTerciary};
  }

  &:active {
    filter: saturate(0.5);
  }
`;
