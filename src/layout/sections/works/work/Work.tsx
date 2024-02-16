import React from 'react';
import styled from "styled-components";
import {Links} from "../../../../components/Links";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt={''}/>
                <Button>View Project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Links href={'#'}>demo</Links>
                <Links href={'#'}>code</Links>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${theme.color.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${Links} {
    padding: 10px 0;

    & + ${Links} { //каждый элемент который идет после линка
      margin-left: 20px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      position: absolute;
      content: '';
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0px 10px;
`

const Description = styled.div`
  padding: 25px 20px;
`