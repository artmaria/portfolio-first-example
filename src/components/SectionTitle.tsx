import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})}
  
  text-align: center;
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
    
    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`