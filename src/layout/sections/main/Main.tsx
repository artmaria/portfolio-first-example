import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/mainPhoto.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <>
                    <span>Hi There</span>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </>

                <Photo src={photo} alt=''/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
`

const MainTitle = styled.h1`

`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const Name = styled.h2`

`