import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

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
  background-color: #c5b9b9;
  min-height: 30vh;
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`
 
`

const SocialLink = styled.a`

`

const Name = styled.p`

`

const Copyright = styled.small`

`

