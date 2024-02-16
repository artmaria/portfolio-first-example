import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/mainPhoto.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Svetlana Dyablo</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=''/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${theme.color.primaryBg};
  display: flex;
  padding: 94px 0 0;
`

const MainTitle = styled.h1`
  //font-size: 27px; эти значеня передает в mixin
  //font-weight: 400;
  ${font({weight: 400, Fmax: 27, Fmin: 20})}
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

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
