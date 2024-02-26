import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Skills = styled.section`
  background-color: ${theme.color.secondaryBg};
`

const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;
  
  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`

export const IconWrapper = styled.div`
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
  text-transform: uppercase;

`

const SkillText = styled.p`
  text-align: center;
`

export const S ={
    Skills,
    Skill,
    IconWrapper,
    SkillText,
    SkillTitle,
}