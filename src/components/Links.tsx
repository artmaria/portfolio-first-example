import {theme} from "../styles/Theme";
import styled from "styled-components";

export const Links = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  z-index: 1;
  position: relative;

  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.color.accent};
    position: absolute;
    bottom: 0;
    left: 0px;
    right: 0px;
    bottom: 5px;
    z-index: -1;
  }
`