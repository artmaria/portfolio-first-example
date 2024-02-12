import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  position: relative;
  margin-bottom: 90px;

  &::before {
    content: '';
    display: inline-block;
    border: 1px;
    height: 1px;
    width: 55px;
    background-color: ${theme.color.accent};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
  }
`