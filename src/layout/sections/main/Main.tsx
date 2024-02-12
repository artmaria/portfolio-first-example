import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/mainPhoto.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
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
`

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
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
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative; //элемент к которому будем позиционировать
    z-index: 0;

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
`

const SmallText = styled.h2`
  font-size: 14px;
  font-weight: 400;
`
