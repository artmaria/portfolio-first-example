import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 32px;
  width: 170px;
  position: relative;
  z-index: 1;
  
  &:hover{
    &::before {
      width: 100%;
      height: 100%;
    }
  }
 
  &::before {
    content: '';
    display: inline-block;
    width: 50%;
    height: 10px;
    background-color:${theme.color.accent};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`