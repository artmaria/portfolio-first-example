import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 380px;
  padding: 62px 20px 40px;
`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    left: 50%;
    top: 50%;
    transform: rotate(45deg) translate(-50%, -50%); //translate используется, чтобы не перезаписать другое свойство transform
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

`

const SkillText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`