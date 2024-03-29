import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.div`
  min-height: 100vh;
  background-color: ${theme.color.primaryBg};
  display: flex;
  padding: 94px 0 94px;
`

const MainTitle = styled.h1`
  //font-size: 27px; эти значеня передает в mixin
  //font-weight: 400;
  ${font({weight: 400, Fmax: 27, Fmin: 20})}
  p {
    display: none;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    height: 470px;
    width: 360px;
    border: 5px solid ${theme.color.accent};
    z-index: -1;
    top: -24px;
    left: 24px;
    @media ${theme.media.mobile} {
      height: 414px;
      width: 314px;
      top: -17px;
      left: 20px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 65px; 
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36
})} //font-family: 'Josefin Sans', sans-serif;
          //font-size: 50px;
          //font-weight: 700; 
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative; //элемент к которому будем позиционировать
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.color.accent};
      position: absolute; //элемент который надо позиционировать относительно родительского
      bottom: 0; //прижали к низу
      z-index: -1;
    }
  }
}

@media ${theme.media.mobile} {
  margin: 15px 0 22px;
}
`

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`

export const S = {
    Main,
    MainTitle,
    PhotoWrapper,
    Photo,
    Name,
    SmallText,
}