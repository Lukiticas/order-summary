import styled from "styled-components";
import { DefaultImg } from "../../styles/global.styles";

export const OrderBody = styled.figure`
  display: flex;
  width: 100%;
  height: calc(max-content + 1em);
  align-items: center;
  padding: 0.8em 1em;
  gap: 1em;
  color: ${(props) => props.theme.colors.clrTerciary};
  background-color: ${(props) => props.theme.colors.bgPrimary};
  border-radius: 1em;
`;

export const OrderIcon = styled(DefaultImg)`
  width: 3.2em;
`;

export const OrderPrices = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  gap: 0.2em;

  & h3 {
    color: inherit;
    font-size: 1em;
    font-weight: 700;
  }

  & p {
    font-size: 1em;
    color: ${(props) => props.theme.colors.clrPrimary};
    line-height: 1.5;
    &:before {
      content: "$";
    }
    & span:before {
      content: "/";
    }
  }
`;

export const ChangeOrder = styled.a`
  color: ${(props) => props.theme.colors.bgTerciary};
  position: relative;
  cursor: pointer;
  font-weight: 700;

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -0.15em;
    background-color: ${(props) => props.theme.colors.bgTerciary};
    height: 0.2em;
    border-radius: 1em;
    width: 0;
    transition: width 200ms ease-in;
  }

  &:hover:after {
    width: 100%;
  }
`;
