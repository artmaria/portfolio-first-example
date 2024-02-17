import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Svetlana</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'inst'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'telegram'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'vk'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'linkedIn'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.color.primaryBg};
  padding: 50px 0 50px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0 30px;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex; //строчные не принимают ширину и высоту, flex меняет это
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  color: ${theme.color.accent}; //в sprite указать currenColor в fill для получения этого значения
  
  &:hover {
    color: ${theme.color.primaryBg};
    transform: translateY(-4px);
    background-color: ${theme.color.accent};
  }
`

const Name = styled.p`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 3px;
`

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  opacity: 0.5;
`

